const controller = {};
module.exports = controller;

const schoolService = require("../services/school.service");

controller.list = async (req, res) => {
    try{

        const page = req.query.page || 0;

        const result = await schoolService.list(req.user, page);

        return res.status(200)
        .json(result);

    }catch(e){

        return res.status(500)
        .json({ msg: e.message });

    }
}

controller.getById = async (req, res) => {
    try{

        const schoolId = req.params.id;

        if(!schoolId){
            throw new Error(`schoolId is required`);
        }

        const result = await schoolService.getByid(req.user, schoolId);

        if(!result){
            return res.status(404)
            .json({ msg: `Not found school for id ${schoolId}` });
        }

        return res.status(200)
        .json(result);

    }catch(e){

        return res.status(500)
        .json({ msg: e.message });

    }
}