import { Request, Response, NextFunction } from 'express';
import { IError } from './interface';
export default(err: IError, req: Request, res: Response, next: NextFunction) => {
    res.json(
        {
            error: err.error,
            message: err.message || 'error',
            status: err.code,
            timestamp: new Date()
        }
    );
};