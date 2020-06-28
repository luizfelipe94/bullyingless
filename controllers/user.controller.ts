import express, { Request, Response, Router, NextFunction } from "express";

import Controller from "../interfaces/controller.interface";
import UserService from "../services/user.service";

export default class UserController implements Controller {

    public path = "/user";
    public router: Router = express.Router();
    public userService: UserService;

    constructor(){
        this.userService = new UserService();
    }

    public initRoutes() {
        this.router.get('/user', this.list);
    }

    public async list(req: Request, res: Response){
        try{

            const page = req.query.page as unknown as number || 0;
            const result = await this.userService.list(req.user, page);
    
            return res.status(200)
            .json(result);

        }catch(e){
            return res.status(500)
            .json({ msg: `Internal server error. ${e.message}` });
        }
    }

}