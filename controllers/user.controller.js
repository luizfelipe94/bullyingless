const controller = {};
module.exports = controller;

const userService = require("../services/user.service");

controller.list = async (req, res) => {
    try{

        const page = req.query.page || 0;

        const result = await userService.list(req.user, page);

        return res.status(200)
        .json(result);

    }catch(e){

        return res.status(500)
        .json({ msg: `Internal server error. ${e.message}` });

    }

}

controller.findById = async (req, res) => {
    try{

        const userId = req.params.id;

        if(!userId){
            throw new Error(`userId is required`);
        }

        const result = await userService.getById(req.user, userId);

        if(!result){
            return res.status(404)
            .json({ msg: `Not found user for id ${userId}` });
        }

        return res.status(200)
        .json(result);

    }catch(e){
        console.log(e);
        return res.status(500)
        .json({ msg: `Internal server error. ${e.message}` });
    }
}

controller.save = async (req, res) => {
    try{
        
        const toInsert = req.body;
        if(!toInsert){
            return res.status(400)
            .json({ msg: `Invalid body` });
        }

        const result = await userService.save(req.user, toInsert);

        return res.status(200)
        .json(result);

    }catch(e){
        return res.status(500)
        .json({ msg: `Internal server error. ${e.message}` }); 
    }
}

controller.update = async (req, res) => {
    return res.status(501).json('Method update not yet implemented.');
}

controller.delete = async (req, res) => {
    return res.status(501).json('Method delete not yet implemented.');
}