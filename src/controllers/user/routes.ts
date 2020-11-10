import{ Router } from 'express';

import userControler from './controller';
import validationHandler from '../../libs/validationHandler';
 
import config from '../trainee/validation';
import authmiddleware from '../../libs/routes/authmiddleware';
console.log(config);
console.log(authmiddleware);

const userRouter = Router();

userRouter.route('/')
.get(authmiddleware('getUser','read'), validationHandler ( config ) , userControler.get)
.post(authmiddleware('getUser','read'),validationHandler ( config) , userControler.create)
.put(authmiddleware('getUser','read'),validationHandler ( config) ,  userControler.update)
.delete(authmiddleware('getUser','read'),validationHandler ( config) ,userControler.delete)


export default userRouter;