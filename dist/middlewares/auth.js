"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const secret = process.env.SECRET_TOKEN;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Auth = (req, res, next) => {
    let token = req.headers['authorization'] || '';
    if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length);
    }
    if (token) {
        jsonwebtoken_1.default.verify(token, secret, (err, decoded) => {
            if (err) {
                return res.status(401).json({
                    success: false,
                    message: 'Invalid auth token'
                });
            }
            else {
                req.user = decoded;
                next();
            }
        });
    }
    else {
        return res.status(401).json({
            success: false,
            message: 'It is necessary to pass the auth token'
        });
    }
};
exports.default = Auth;
