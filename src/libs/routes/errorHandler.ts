import { Request, Response, NextFunction } from 'express';
import { IError } from './interface';
export default(err: IError, req: Request, res: Response, next: NextFunction) => {
      if (res.headersSent) {
        return next(err);
    }
    next(),
    res.status (err.code).json(
        {
            error: err.error,
            message: err.message || 'file not found',
            status: err.code,
            timestamp: new Date()
        }
    );
};
