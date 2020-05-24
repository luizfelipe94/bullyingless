const UserService = {};
module.exports = UserService;

const jwt = require("jsonwebtoken");

const utils = require("../lib/utils");
const userRepository = require("../repository/user.repository");

UserService.list = async (user, page) => {
    
    const result = await userRepository.list(user, page);

    return result;

};

UserService.getById = async (user, id) => {

    const result = await userRepository.getById(user, id);

    return result;

};

UserService.save = async (user, newUser) => {

    // melhorar a validacao de novo usuario
    if(!newUser.username || !newUser.name || !newUser.email || !newUser.password){
        throw new Error("Invalid user attributes");
    }

    newUser.password = utils.hash(newUser.password);
    
    const result = await userRepository.save(user, newUser, newUser.profileId)
    .catch((err) => {
        // criar um error handler pra validacoes do sequelize.
        if(err.name === "SequelizeUniqueConstraintError"){
            throw new Error(`Already exists user with username ${newUser.username}`);
        }
    });

    return result;

};

UserService.update = (user) => {

};

UserService.delete = (user) => {

};

UserService.login = async (schoolId, username, password) => {

    const result = await userRepository.getByUsername({ schoolId }, username, ['password']);

    if(!result){
        throw new Error(`Username or password invalid`);
    }

    if(!utils.compareHash(password, result.password)){
        throw new Error(`Username or password invalid`);
    }

    const payload = {
        id: result.id,
        name: result.name,
        email: result.email,
        profileId: result.Profile.id,
        schoolId: result.School.id,
        tenantId: result.School.Tenant.id
    };

    return jwt.sign(payload, process.env.SECRET_TOKEN);

} 