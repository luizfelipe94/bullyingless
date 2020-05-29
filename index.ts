import dotenv from "dotenv";
dotenv.config();

const API_VERSION = "v1";

import LoginController from "./controllers/login.controller";

import App from "./app";

const app = new App(
    API_VERSION,
    [
        new LoginController
    ]
)

app.listen();