import { Request, Response, NextFunction } from 'express';
import config from '../../config/configuration'
//import { NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import hasPermission from '../permission' ;


export default (module: string , permissionType:string) =>(req:Request, res:Response, next:NextFunction) => {
    try {
        console.log('module and permission is ', module , permissionType);
        console.log('header', req.header('authorization'));
        const token = req.header('authorization');
        const decode = jwt.verify(token, config.Secret_Key );
        console.log('decoded user', decode);
         const result =  hasPermission(module, permissionType, decode.role);
         console.log('result is', result);
        if (result === true)
         {
           return true;
           next();
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
