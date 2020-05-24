const schoolController = require("../controllers/school.controller");

module.exports = (router) => {
    router.get('/school', schoolController.list);
}