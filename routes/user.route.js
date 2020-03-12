const userController = require("../controllers/user.controller");

module.exports = (router) => {
    router.get('/users', userController.list);
    router.get('/users/:id', userController.findById);
    router.post('/users', userController.insert);
    router.put('/users/:id', userController.update);
    router.delete('/users/:id', userController.delete);
}