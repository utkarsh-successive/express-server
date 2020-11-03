import{ Router } from 'express';

import traineeControler from './controller';


const traineeRouter = Router();

traineeRouter.route('/')
.get(traineeControler.get)
.post(traineeControler.create)
.put(traineeControler.update)
.delete(traineeControler.delete);

export default traineeRouter;