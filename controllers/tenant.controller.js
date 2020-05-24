const controller = {};
module.exports = controller;

const tenantService = require("../services/tenant.service");

controller.list = async (req, res) => {
    try{
        const tenants = await tenantService.list();
        return res.status(200)
        .json(tenants);
    }catch(e){
        console.log(e);
        return res.status(500)
        .json({ msg: "Internal server error" });
    }
}