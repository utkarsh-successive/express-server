import{ Router } from 'express';

import traineeControler from './controller';
import validationHandler from '../../libs/validationHandler';
 
import config from '../trainee/validation';
//import authmiddleware from '../../libs/routes/authmiddleware';
console.log(config);
//console.log(authmiddleware);
const traineeRouter = Router();

traineeRouter.route('/')
.get( validationHandler ( config ) , traineeControler.get)
.post(validationHandler ( config) , traineeControler.create)
.put(validationHandler ( config) ,  traineeControler.update)
.delete(validationHandler ( config) ,traineeControler.delete)
//.get(authmiddleware('getUser','read'),validationHandler ( config ) , traineeControler.get)

export default traineeRouter;