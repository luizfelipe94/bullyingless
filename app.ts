import express, { Application, Request, Response, Router } from "express";
import Controller from "./interfaces/controller.interface";

import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";

import auth from "./middlewares/auth";
import tid  from "./middlewares/transaction";
import errorHandler from "./middlewares/errorHandler";

class App {

    public app: Application;
    public apiVersion: string;

    constructor(apiVersion: string, controllers: Controller[]){
        this.apiVersion = apiVersion;
        this.app = express();
        this.initMiddlewares();
        this.initControllers(controllers);
        this.initErrorHandling();
    }

    private initMiddlewares(){
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(morgan("dev"));
        this.app.use(tid);
        this.app.use(auth);
    }

    private initErrorHandling(){
        this.app.use(errorHandler);
    }

    private initControllers(controllers: Controller[]){
        const baseUrl = `/api/${this.apiVersion}`;
        controllers.forEach((controller) => this.app.use(baseUrl, controller.router));
    }

    public listen(){
        const port = process.env.PORT;
        this.app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    }

}

export default App;