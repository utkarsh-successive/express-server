import { Router } from 'express';
import { traineeRouter } from './controllers/trainee';

const mainRouter = Router();
mainRouter.use('/trainee', traineeRouter);

export default mainRouter;