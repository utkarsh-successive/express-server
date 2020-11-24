import * as jwt from 'jsonwebtoken';
import hasPermission from '../permission';
import UserRepository from '../../repositories/User/UserRepository';
import config from '../../config/configuration';
export default (module, permissionType) => async (req, res, next) => {
    try {
        const UserRepo = new UserRepository();
        console.log('Module and permission is', module, permissionType);
        console.log('header', req.header('authorization'));
        const token = req.header('authorization');
        const decode = jwt.verify(token, config.Secret_Key).result;
        console.log('decoded user', decode);
        console.log('email nad password', decode.email, decode.password, decode.role);
        let result = await UserRepo.findOne({ 'email': decode.email });
            console.log('result is ', result);
            if (!result) {
                return next({
                    error: 'User not existing in db',
                    code: 403
                });
            }
            console.log('result is', result.name);
            console.log(result);
            req.user = decode;
            res.locals.user = decode;
            console.log('User in request', decode, module, permissionType);
            if (!hasPermission(module, permissionType, decode.role)) {
                console.log('database data', result.password, result.email, decode.email, decode.password);
                return next({
                    error: 'Unauthorized User role',
                    code: 403
                });
            }
            return next();
        // });
    }
    catch (err) {
        next({
            error: 'Unauthorized',
            code: 403
        });
    }
};