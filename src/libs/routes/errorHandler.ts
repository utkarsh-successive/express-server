import { Request, Response, NextFunction } from 'express';
import { IError } from './interface';
export default(err: IError, req: Request, res: Response, next: NextFunction) => {
      if (res.headersSent) {
        return next(err);
    }
    res.status (err.code).json(
        {
            error: err.error,
            message: err.message || 'error',
            status: err.code || '500'
            timestamp: new Date()
        }
    );
};
