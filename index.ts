import dotenv from "dotenv";
dotenv.config();

import express, { Application, Request, Response, Router } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";

const app: Application = express();
const router: Router = express.Router();

const PORT = process.env.PORT || 5000;
const API_VERSION = process.env.API_VERSION;

import auth from "./middlewares/auth";
import tid  from "./middlewares/transaction";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

app.use(tid);

app.use(`/api/${API_VERSION}`, router);

// public routes
router.get('/', (req: Request, res: Response) => {
    return res.status(200).json('API BULLYINGLESS');
});

// require("./routes/login.route")(router);

// router.use(auth);

// private routes
// require("./routes/tenant.route")(router);
// require("./routes/school.route")(router);
// require("./routes/user.route")(router);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;