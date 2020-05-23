const UserService = {};
module.exports = UserService;

const { User, Profile } = require("../models");

UserService.list = async () => {
    
    const users = await User.findAll({
        attributes: ['id', 'name', 'email', 'password'],
        include: [
            { model: Profile, required: false }
        ]
    });

    return users;

};

UserService.getByUuid = () => {

}

UserService.update = () => {

}

UserService.delete = () => {

}