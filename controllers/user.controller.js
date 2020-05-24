const controller = {};
module.exports = controller;

const userService = require("../services/user.service");

controller.list = async (req, res) => {
    try{
        const users = await userService.list();
        return res.status(200)
        .json(users);
    }catch(e){
        return res.status(500)
        .json({ msg: "Internal server error" });
    }

}

controller.findById = async (req, res) => {
    return res.status(501).json('Method findById not yet implemented.');
}

controller.insert = async (req, res) => {
    return res.status(501).json('Method insert not yet implemented.');
}

controller.update = async (req, res) => {
    return res.status(501).json('Method update not yet implemented.');
}

controller.delete = async (req, res) => {
    return res.status(501).json('Method delete not yet implemented.');
}