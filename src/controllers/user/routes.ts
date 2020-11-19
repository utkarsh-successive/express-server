import{ Router } from 'express';
import userControler from './controller';
import validationHandler from '../../libs/validationHandler';
 import config from '../trainee/validation';
import authmiddleware from '../../libs/routes/authmiddleware';
import database from '../../libs/database';
import validation from './Validation';
import { permissions } from '../../libs/constants';
console.log(authmiddleware);
const userRouter = Router();

userRouter.route('/')
.get(authmiddleware('getUser', 'read'), validationHandler ( config.get ) , userControler.get)
.post(authmiddleware('getUser', 'read'), validationHandler ( config.create) , userControler.create)
.put(authmiddleware('getUser', ' read'), validationHandler ( config.update) ,  userControler.update)
userRouter.route('/:id').delete(authmiddleware('getUser', 'read'), validationHandler ( config.delete) , userControler.delete);

userRouter.route('/login')
    .post(validationHandler(validation.login), userControler.login);

userRouter.route('/me')
    .get(authmiddleware('getUser', 'read'), userControler.me);
export default userRouter;