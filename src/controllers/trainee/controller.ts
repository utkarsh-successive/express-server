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
    get = async( req: Request, res: Response, next: NextFunction) => {
        try {
           let traineecount = 0;
           let {sort } = req.query;
           const query = req.body;
           sort = (sort === undefined || sort.length === 0 ) ? 'createdAt' : sort;
            console.log('Inside get function of Trainee Controller');
            await this.userRepository.find({deletedAt: undefined}, {}, {sort: { [String(sort)] : -1} })
            .then ((resp) => {
                for (const users of resp) {
                    if (users.role === 'trainee')
                        traineecount++;
                }
                console.log('Response of Repo is', resp);
                res.send({
              message: `Trainee fatch sucessfully and the total number of trainees are ${traineecount}`,
                    data: resp
                });
            });
        } catch (err) {
            console.log('Inside err');
        }
    }
    update = async(req: Request, res: Response, next: NextFunction ) => {
        try {
            console.log('Inside put function of trainee Controller');
            await this.userRepository.update(req.body.dataToUpdate)
            .then ((resp) => {
                console.log('Response of Repo is', resp);
                res.send({
                    message: 'trainee updated sucessfully',
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
    create = async( req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('Inside post function of trainee Controller');
            await this.userRepository.create(req.body)
            .then ((resp) => {
                console.log('Response of Repo is', resp);
                res.send({
                    message: 'trainee created sucessfully',
                    data: resp
                });
            });
        } catch (err) {
            console.log('Inside err', err);
        }
    }
    delete = async( req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('Inside delete function of trainee Controller');
            console.log('id', req.params.id, this);
            await this.userRepository.delete(req.params.id)
            .then ((resp) => {
                console.log('Response of Repo is', resp);
                res.send({
                    message: 'trainee deleted sucessfully',
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
