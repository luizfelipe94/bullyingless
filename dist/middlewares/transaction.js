"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const uuid = require("uuid");
const uuid_1 = require("uuid");
const Transaction = (req, res, next) => {
    const tid = req.query.tid || uuid_1.v4();
    req.tid = tid;
    console.log(`tid: ${req.tid}`);
    next();
};
exports.default = Transaction;
