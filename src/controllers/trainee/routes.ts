import{ Router } from 'express';
import traineeControler from './controller';
import validationHandler from '../../libs/validationHandler';
import config from './validation';
import authmiddleware from '../../libs/routes/authmiddleware';
console.log(config);
console.log(authmiddleware);
const traineeRouter = Router();

traineeRouter.route('/')
.get(authmiddleware('getUser','read'), validationHandler ( config ) , traineeControler.get)
.post(authmiddleware('getUser','read'),validationHandler ( config) , traineeControler.create)
.put(authmiddleware('getUser','read'),validationHandler ( config) ,  traineeControler.update)
.delete(authmiddleware('getUser','read'),validationHandler ( config) ,traineeControler.delete)
export default traineeRouter;