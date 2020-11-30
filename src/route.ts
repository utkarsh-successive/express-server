import { Router } from 'express';
import { traineeRouter, userRouter } from './controllers';

const mainRouter = Router();

mainRouter.use('/trainee', traineeRouter);

mainRouter.use('/user', userRouter);

export default mainRouter;