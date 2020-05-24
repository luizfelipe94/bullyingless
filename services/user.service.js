const UserService = {};
module.exports = UserService;

const jwt = require("jsonwebtoken");

const utils = require("../lib/utils");
const userRepository = require("../repository/user.repository");

UserService.list = async (page) => {
    
    const users = await userRepository.list(page);

    return users;

};

UserService.save = async (newUser, profileId, schoolId) => {

    newUser.password = utils.hashPassword(newUser.password);
    
    const result = await userRepository.save(newUser, profileId, schoolId);

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

UserService.login = async (username, password) => {

    const user = await userRepository.getByUsername(username, ['password']);

    if(!user){
        throw new Error(`Username or password invalid`);
    }

    if(!utils.compareHash(password, user.password)){
        throw new Error(`Username or password invalid`);
    }

    const payload = {
        id: user.id,
        name: user.name,
        email: user.email,
        profileId: user.Profile.id,
        schoolId: user.School.id,
        tenantId: user.School.Tenant.id
    };

    return jwt.sign(payload, process.env.SECRET_TOKEN);

} 