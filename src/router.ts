import { Router } from 'express';
import { traineeRouter } from './controllers/trainee';
import { userRouter } from './controllers/user';
const mainRouter = Router();
mainRouter.use('/trainee', traineeRouter);
mainRouter.use('/User', userRouter);

export default mainRouter;


