import{ Router } from 'express';
import traineeControler from './controller';
import validationHandler from '../../libs/validationHandler';
import config from './validation';
import authmiddleware from '../../libs/routes/authmiddleware';
console.log(config);
console.log(authmiddleware);
const traineeRouter = Router();

traineeRouter.route('/')
.get(authmiddleware('getUser','all'), validationHandler ( config.get ) , traineeControler.get)
.post(authmiddleware('getUser','all'),validationHandler ( config.create) , traineeControler.create)
.put(authmiddleware('getUser','all'),validationHandler ( config.update) ,  traineeControler.update)
.delete(authmiddleware('getUser','all'),validationHandler ( config.delete) ,traineeControler.delete)
export default traineeRouter;