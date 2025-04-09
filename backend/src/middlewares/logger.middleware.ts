import { Logger } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export function loggerMiddleware(req: Request, res: Response, next: NextFunction) {
    Logger.log(`Method: ${req.method}, Url: ${req.url}`);
    next();
}
