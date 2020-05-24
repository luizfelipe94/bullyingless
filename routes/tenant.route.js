const tenantController = require("../controllers/tenant.controller");

module.exports = (router) => {
    router.get('/tenant', tenantController.list);
}