import * as jwt from 'jsonwebtoken';
import hasPermission from '../permission' 

export default (module , permissionType) =>(req , res, next) => {
    try {
        console.log('module and permission is ', module , permissionType);
        console.log('header', req.header('authorization'));
        const token = req.header('authorization');
        const decode = jwt.verify(token, 'qwertyuiopasdfghjklzxcvbnm123456');
        console.log('decoded user', decode);
        console.log('authorized', hasPermission(module, permissionType, decode.role));
        next();

    }
    catch (error){
        next({
            error : 'unauthorized',
            code : 403
        }

        )
    }
}