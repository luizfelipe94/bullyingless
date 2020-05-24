const controller = {};
module.exports = controller;

const userService = require("../services/user.service");

controller.login = async (req, res) => {
    try{

        const { username, password }  = req.body;

        if(!username || !password){
            return res.status(400)
            .json({ msg: "Invalid username or password" });
        }

        const token = await userService.login(username, password);

        return res.status(200)
        .json({ token: `Bearer ${token}` });

    }catch(e){

        return res.status(403)
        .json({ msg: `${e.message}` }); 

    }
}