const SchoolService = {};
module.exports = SchoolService;

const { School, Tenant, User, Sequelize, Profile } = require("../models");

const Profiles = {
    STUDENT: "Student",
    ADMINISTRATOR: "Administrator"
}

SchoolService.list = async () => {
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
        ]
    });
    return schools;
}