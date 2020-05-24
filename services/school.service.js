const SchoolService = {};
module.exports = SchoolService;

const dbUtils = require("../lib/dbUtils");
const { School, Tenant, User, Sequelize, Profile } = require("../models");

const Profiles = {
    STUDENT: "Student",
    ADMINISTRATOR: "Administrator"
}

SchoolService.list = async (page = 0, pageSize = 2) => {

    const schools = await  School.findAll({
        attributes: [
            'id', 'name', 'createdAt', 'updatedAt',
            [Sequelize.fn("COUNT", Sequelize.col("Users.id")), "studentsQty"]
        ],
        include: [
            { 
                model: Tenant, 
                required: true 
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
        // limit: pageSize,
        // offset: page * pageSize
    });
    return schools;

}