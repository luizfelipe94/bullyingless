const userController = require("../controllers/user.controller");

module.exports = (router) => {
    router.get('/user', userController.list);
    router.get('/user/:id', userController.findById);
    router.post('/user', userController.save);
    router.put('/user/:id', userController.update);
    router.delete('/user/:id', userController.delete);
}