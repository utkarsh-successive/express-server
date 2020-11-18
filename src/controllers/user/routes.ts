import{ Router } from 'express';
import userControler from './controller';
import validationHandler from '../../libs/validationHandler';
 import config from './Validation';
import authmiddleware from '../../libs/routes/authmiddleware';
console.log(authmiddleware);
const userRouter = Router();
userRouter.route('/')

.get(authmiddleware('getUser', 'read'), validationHandler ( config.get ) , userControler.get)
.post(authmiddleware('getUser', 'read'), validationHandler ( config.create) , userControler.create)
.put(authmiddleware('getUser', 'read'), validationHandler ( config.update) ,  userControler.update)
.delete(authmiddleware('getUser', 'read'), validationHandler ( config.delete) , userControler.delete);

userRouter.route('/login')
    .post(validationHandler(config.login), userControler.login);

userRouter.route('/me')
    .get(authmiddleware('getUser', 'read'), userControler.me);
export default userRouter;