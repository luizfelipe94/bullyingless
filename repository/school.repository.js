const SchoolRepository = {};
module.exports = SchoolRepository;

const { School, Tenant, User, Profile, Sequelize } = require("../models");

const dbUtils = require("../lib/dbUtils");

const Profiles = {
    STUDENT: "Student",
    ADMINISTRATOR: "Administrator"
}

SchoolRepository.list = async (user, page = 0, pageSize = 2) => {

    return School.findAll({
        attributes: [
            'id', 'name', 'createdAt', 'updatedAt',
            [Sequelize.fn("COUNT", Sequelize.col("Users.id")), "studentsQty"]
        ],
        include: [
            { 
                model: Tenant, 
                required: true,
                where: { id: user.tenantId }
            },
            { 
                model: User, 
                required: false, 
                duplicating : false,
                as: 'Users', 
                attributes: [],
                include: {
                    model: Profile, 
                    required: true, 
                    attributes: [], 
                    where: { 
                        name: Profiles.STUDENT
                    }
                }
            },
        ],
        group: ['School.id', 'Tenant.id'],
        order: [
            ['id', 'ASC']
        ],
        ...dbUtils.paginate({ page, pageSize })
    });

}

SchoolRepository.getById = async (user, schoolId) => {

    return School.findOne({
        where: { 
            tenantId: user.tenantId,
            id: schoolId
        },
        include: [ 
            {
                model: Tenant, 
                required: true
            }
        ] 
    });

}