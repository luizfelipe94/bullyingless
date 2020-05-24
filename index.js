require('dotenv').config();

const express       = require('express');
const cors          = require('cors');
const bodyParser    = require('body-parser');
const morgan        = require('morgan');

const app = express();
const router = express.Router();
const PORT = process.env.PORT || 5000;
const API_VERSION = process.env.API_VERSION;

const auth = require("./middlewares/auth");
const tid = require("./middlewares/transaction");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

app.use(tid);

app.use(`/api/${API_VERSION}`, router);

// public routes
router.get('/', (req, res) => {
    return res.status(200).json('API BULLYINGLESS');
});

require("./routes/login.route")(router);

router.use(auth);

// private routes
require("./routes/user.route")(router);
require("./routes/tenant.route")(router);
require("./routes/school.route")(router);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;