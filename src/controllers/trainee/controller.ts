import { Request, Response, NextFunction } from 'express';
import UserRepository from '../../repositories/User/UserRepository';
class TraineeController {
    static instance: TraineeController;

    static getInstance() {
         if ( TraineeController.instance) {
             return TraineeController.instance;
         }
         TraineeController.instance = new TraineeController();
         return TraineeController.instance;
    }
    userRepository: UserRepository = new UserRepository();
    get = ( req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('Inside get function of Trainee Controller');
            this.userRepository.find({deletedAt: undefined}, {}, {})
            .then ((resp) => {
                console.log('Response of Repo is', resp);
                res.send({
                    message: 'user fetch sucessfully',
                    data: resp
                });
            });
        } catch (err) {
            console.log('Inside err');
        }
    }
    update = (req: Request, res: Response, next: NextFunction ) => {
        try {
            console.log('Inside put function of user Controller');
            this.userRepository.update(req.body.dataToUpdate)
            .then ((resp) => {
                console.log('Response of Repo is', resp);
                res.send({
                    message: 'user updated sucessfully',
                    data: resp
                });
            })
            .catch((err) => {
                console.log(err);
            });
        } catch (err) {
            console.log('Inside err', err);
        }

    }
    create = ( req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('Inside post function of user Controller');
            this.userRepository.create(req.body)
            .then ((resp) => {
                console.log('Response of Repo is', resp);
                res.send({
                    message: 'user created sucessfully',
                    data: resp
                });
            });
        } catch (err) {
            console.log('Inside err', err);
        }
    }
    delete = ( req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('Inside delete function of user Controller');
            console.log('id', req.params.id, this);
            this.userRepository.delete(req.params.id)
            .then ((resp) => {
                console.log('Response of Repo is', resp);
                res.send({
                    message: 'user deleted sucessfully',
                    data: resp
                });
            })
            .catch((err) => {
                console.log('enter try catch');
                console.log(err);
            });
        } catch (err) {
            console.log('enter delete catch');
            console.log('Inside err', err);
        }
    }
}
export default new TraineeController();
