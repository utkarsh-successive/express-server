import{ Router } from 'express';

import traineeControler from './controller';
import validationHandler from '../../libs/validationHandler';
import validation from './validation';

const traineeRouter = Router();

traineeRouter.route('/')
.get(validationHandler(validation.get), traineeControler.get)
.post(validationHandler(validation.create), traineeControler.create)
.put(validationHandler(validation.update), traineeControler.update)
.delete(validationHandler(validation.delete), traineeControler.delete);

export default traineeRouter;