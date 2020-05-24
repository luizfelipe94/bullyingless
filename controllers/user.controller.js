const controller = {};
module.exports = controller;

const userService = require("../services/user.service");

controller.list = async (req, res) => {
    try{

        const result = await userService.list();

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

        const result = await userService.getById(userId);

        if(!result){
            return res.status(404)
            .json({ msg: `Not found user for id ${userId}` });
        }

        return res.status(200)
        .json(result);

    }catch(e){
        return res.status(500)
        .json({ msg: `Internal server error. ${e.message}` });
    }
}

controller.save = async (req, res) => {
    try{
        
        const toInsert = req.body.user;
        const profileId = req.body.profileId;

        const result = await userService.save(toInsert, profileId);

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