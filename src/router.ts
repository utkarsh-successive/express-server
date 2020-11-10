import { Router } from 'express';
import { traineeRouter } from './controllers/trainee';

const mainRouter = Router();
mainRouter.use('/trainee', traineeRouter);
mainRouter.use('/User', traineeRouter);

export default mainRouter;


