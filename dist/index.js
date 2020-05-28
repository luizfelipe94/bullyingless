"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const app = express_1.default();
const router = express_1.default.Router();
const PORT = process.env.PORT || 5000;
const API_VERSION = process.env.API_VERSION;
const transaction_1 = __importDefault(require("./middlewares/transaction"));
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use(morgan_1.default('dev'));
app.use(cors_1.default());
app.use(transaction_1.default);
app.use(`/api/${API_VERSION}`, router);
// public routes
router.get('/', (req, res) => {
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
