const Utils = {};
module.exports = Utils;

const bcrypt = require("bcrypt");

Utils.hash = (value) => {
    return bcrypt.hashSync(value, 10);
}

Utils.compareHash = (value, hash) => {
    return bcrypt.compareSync(value, hash);
}