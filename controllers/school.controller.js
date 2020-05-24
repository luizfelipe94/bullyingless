const controller = {};
module.exports = controller;

const schoolService = require("../services/school.service");

controller.list = async (req, res) => {
    try{
        const schools = await schoolService.list();
        return res.status(200)
        .json(schools);
    }catch(e){
        console.log(e);
        return res.status(500)
        .json({ msg: e.message });
    }
}