import { Request, Response, NextFunction } from "express";
import HttpException from "../exceptions/httpException";

const ErrorMiddleware = (error: HttpException, req: Request, res: Response, next: NextFunction) => {

    const status = error.status || 500;
    const message = error.message || "Something wrong";

    return res.status(status)
    .json({
        status: status,
        msg: message
    });

}

export default ErrorMiddleware;