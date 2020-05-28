// const uuid = require("uuid");
import { v4 as uuidv4 } from 'uuid';

import { Request, Response, NextFunction } from "express";

const Transaction = (req: Request, res: Response, next: NextFunction) : void => {
    const tid = req.query.tid as string || uuidv4();
    req.tid = tid;
    next();
}

export default Transaction;