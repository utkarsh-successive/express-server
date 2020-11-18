import{ Router } from 'express';
import traineeControler from './controller';
import validationHandler from '../../libs/validationHandler';
import config from './validation';
import authmiddleware from '../../libs/routes/authmiddleware';
import { permissions } from '../../libs/constants';

console.log(authmiddleware);
const traineeRouter = Router();

traineeRouter.route('/')
.get(authmiddleware('permissions.getUser', 'read'), validationHandler ( config.get ) , traineeControler.get)
.post(authmiddleware('permissions.getUser', 'read'), validationHandler ( config.create) , traineeControler.create)
.put(authmiddleware('permissions.getUser', 'read'), validationHandler ( config.update) ,  traineeControler.update)
.delete(authmiddleware('permissions.getUser', 'read'), validationHandler ( config.delete) , traineeControler.delete);
export default traineeRouter;

