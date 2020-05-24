const UserRepository = {};
module.exports = UserRepository;

const { User, Profile } = require("../models");

UserRepository.list = async () => {

    return User.findAll({
        attributes: ['id', 'name', 'email', 'password'],
        include: [
            { model: Profile, required: false }
        ]
    });

}

UserRepository.save = async (newUser, profileId) => {

    const profile = await Profile.findByPk(profileId);

    if(!profileId){
        throw new Error(`Not found profile for id ${profileId}`);
    }

    newUser.profile = profile;

    return User.create(newUser, { include: [ Profile ] });

};

UserRepository.getById = async (id) => {

    return User.findOne({
        where: { id },
        attributes: ['id', 'name', 'email', 'password'],
        include: [
            { model: Profile, required: false }
        ]
    });

}