const UserRepository = {};
module.exports = UserRepository;

const dbUtils = require("../lib/dbUtils");

const { User, Profile, School, Tenant } = require("../models");

UserRepository.list = async (page = 0, pageSize = 2) => {

    return User.findAll({
        attributes: ['id', 'name', 'email', 'password'],
        include: [
            { model: Profile, required: true },
            { model: School, required: true }
        ],
        ...dbUtils.paginate({ page, pageSize })
    });

}

UserRepository.save = async (newUser, profileId, schoolId) => {

    const profile = await Profile.findByPk(profileId);

    if(!profile){
        throw new Error(`Not found profile for id ${profileId}`);
    }

    const school = await School.findByPk(schoolId);

    if(!school){
        throw new Error(`Not found school for id ${schoolId}`);
    }

    newUser.profileId = profile.id;
    newUser.schoolId = school.id;

    return User.create(newUser, { include: [ Profile, School ] });

};

UserRepository.getById = async (id) => {

    return User.findOne({
        where: { id },
        attributes: ['id', 'name', 'email'],
        include: [
            { 
                model: Profile, 
                required: true },
            { 
                model: School, 
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

UserRepository.getByUsername = async (username, attributes = []) => {

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