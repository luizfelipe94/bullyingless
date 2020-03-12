const LoginController = require("../controllers/login.controller");

module.exports = (router) => {
    router.post('/login', LoginController.login);
}