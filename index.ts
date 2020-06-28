import dotenv from "dotenv";
dotenv.config();

const API_VERSION = "v1";

import LoginController from "./controllers/login.controller";
import UserController from "./controllers/user.controller";

import App from "./app";

const app = new App(
    API_VERSION,
    [
        new LoginController,
        new UserController
    ]
)

app.listen();