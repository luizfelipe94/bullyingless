const uuid = require("uuid");

module.exports = (req, res, next) => {
    const tid = req.query.tid || uuid.v4();
    req.tid = tid;
    next();
}