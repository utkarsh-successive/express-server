import { Request, Response, NextFunction } from 'express';
import config from '../../config/configuration'
import * as jwt from 'jsonwebtoken';
import hasPermissions from '../permission' ;


export default (module: string , permissionType:string) =>(req:Request, res:Response, next:NextFunction) => {
    try {
        console.log('module and permission is ', module , permissionType);
        console.log('header', req.header('authorization'));
        const token = req.header('authorization');
        const decode = jwt.verify(token, config.Secret_Key );
        console.log('decoded user', decode);
         const result =  hasPermissions(module, permissionType, decode.role);
         console.log(decode.role);

         console.log('result is', result);
        if (result === true)
         {
           
           return next();
         }
            
        else {
            next({
                message: 'Unauthorised',
                status: 403
            });
        }
    }
    catch (err) {
        next({
            message: err
        });
    }
};
