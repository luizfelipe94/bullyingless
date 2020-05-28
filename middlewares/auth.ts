const secret: string = process.env.SECRET_TOKEN!;
import jwt from "jsonwebtoken";

import { Request, Response, NextFunction } from "express";

const Auth = (req: Request, res: Response, next: NextFunction) => {

    let token: string = req.headers['authorization'] || '';

    if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length);
    }

    if (token) {
        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                return res.status(401).json({
                    success: false,
                    message: 'Invalid auth token'
                });
            } else {
                req.user = decoded;
                next();
            }
        });
    } else {
        return res.status(401).json({
            success: false,
            message: 'It is necessary to pass the auth token'
        });
    }
}

export default Auth;