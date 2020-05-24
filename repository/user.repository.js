const UserRepository = {};
module.exports = UserRepository;

const dbUtils = require("../lib/dbUtils");

const { User, Profile, School, Tenant } = require("../models");

UserRepository.list = async (user, page = 0, pageSize = 2) => {

    return User.findAll({
        attributes: ['id', 'name', 'email', 'password'],
        include: [
            { model: Profile, required: true },
            { 
                model: School, 
                required: true, 
                where: { id: user.schoolId },
                attributes: []
            }
        ],
        ...dbUtils.paginate({ page, pageSize })
    });

}

UserRepository.getById = async (user, id) => {

    return User.findOne({
        where: { id },
        attributes: ['id', 'name', 'email'],
        include: [
            { 
                model: Profile, 
                required: true },
            { 
                model: School, 
                where: { id: user.schoolId },
                required: true, 
                include: [ 
                    {
                        model: Tenant, 
                        required: true
                    }
                ] 
            }
        ]
    });

}

UserRepository.save = async (user, newUser, profileId) => {

    const profile = await Profile.findByPk(profileId);

    if(!profile){
        throw new Error(`Not found profile for id ${profileId}`);
    }

    const school = await School.findByPk(user.schoolId);

    if(!school){
        throw new Error(`Not found school for id ${schoolId}`);
    }

    newUser.profileId = profile.id;
    newUser.schoolId = school.id;

    return User.create(newUser, { include: [ Profile, School ] });

};

UserRepository.getByUsername = async (user, username, attributes = []) => {

    return User.findOne({
        where: { username },
        attributes: ['id', 'name', 'email', ...attributes],
        include: [
            { 
                model: Profile, 
                required: false 
            },
            { 
                model: School, 
                where: { id: user.schoolId },
                required: true,
                include: [ 
                    {
                        model: Tenant, 
                        required: true
                    }
                ] 
            }
        ]
    });

}