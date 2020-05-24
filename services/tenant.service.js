const TenantService = {};
module.exports = TenantService;

const { Tenant } = require("../models");

TenantService.list = async () => {

    const tenants = await Tenant.findAll();
    return tenants;

}