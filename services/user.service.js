const UserService = {};
module.exports = UserService;

const userRepository = require("../repository/user.repository");

UserService.list = async () => {
    
    const users = await userRepository.list();

    return users;

};

UserService.save = async (newUser, profileId) => {

    if(!profileId){
        throw new Error(`profileId must be setted`);
    }
    
    const result = await userRepository.save(newUser, profileId);

    return result;

};

UserService.getById = async (id) => {

    const user = await userRepository.getById(id);

    return user;

};

UserService.update = () => {

};

UserService.delete = () => {

};