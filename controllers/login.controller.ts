import express, { Request, Response, Router, NextFunction } from "express";

import Controller from "../interfaces/controller.interface";
import Login from "../interfaces/login/login.interface";
import Token from "../interfaces/login/token.interface";

import { LoginException, InternalServerErrorException } from "../exceptions";

class LoginController implements Controller {

    public path = "/auth";
    public router: Router = express.Router();

    constructor(){
        this.initRoutes();
    }

    public initRoutes(){
        this.router.post(`${this.path}/login`, this.login)
    }

    public async login(req: Request, res: Response, next: NextFunction): Promise<any | void> {
        
       try{
            const login: Login = req.body;

            if(!login.username || !login.password || !login.schoolId){
                return next(new LoginException(`Invalid username or password`));
            }

            const { token }: Token = { token: "123" };
            
            return res.status(200)
            .json({ token: `Bearer ${token}` });

       }catch(e){
            return next(new InternalServerErrorException()); 
       }
    }

}

export default LoginController;