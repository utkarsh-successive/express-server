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
           let { skip , limit , sort , search } = req.query;
           console.log(typeof req.query , req.query.limit);
           let query ;
           if (!(search === undefined || search.length === 0 )) {
            const regex = /\S+@\S+\.\S+/;
            query = (regex.test(String(search))) ? {email: search} : {name: search};
            }
           sort = (sort === undefined || sort.length === 0 ) ? 'createdAt' : sort;
            console.log('Inside get function of Trainee Controller', skip, limit, req.query);
            const resp = await this.userRepository.find({...query}, {}, { skip : Number(skip), limit : Number(limit), sort: { [String(sort)] : -1} });
           console.log('asdfr', query,resp);
            if (resp) {
                for (const users of resp) {
                    if (users.role === 'trainee')
                        traineecount++;
                }
                console.log('Response of Repo is', resp);
                res.send({
              message: `Trainee fatch sucessfully and the total number of trainees are ${traineecount}`,
               data: resp
                });
            }
        } catch (err) {
            console.log('Inside err');
        }
    }
    update = async(req: Request, res: Response, next: NextFunction ) => {
        try {
            console.log('Inside put function of trainee Controller');
           let resp = await this.userRepository.update(req.body.dataToUpdate);
             if (resp) {
                console.log('Response of Repo is', resp);
                res.send({
                    message: 'trainee updated sucessfully',
                    data: resp
                });
            }
        } catch (err) {
            console.log('Inside err', err);
        }

    }
    create = async( req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('Inside post function of trainee Controller');
         let resp =   await this.userRepository.create(req.body)
            if (resp) {
                console.log('Response of Repo is', resp);
                res.send({
                    message: 'trainee created sucessfully',
                    data: resp
                });
            }
        } catch (err) {
            console.log('Inside err', err);
        }
    }
    delete = async( req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('Inside delete function of trainee Controller');
            console.log('id', req.params.id, this);
          let resp=  await this.userRepository.delete(req.params.id);
             if (resp)  {
                console.log('Response of Repo is', resp);
                res.send({
                    message: 'trainee deleted sucessfully',
                    data: resp
                });
            }
        } catch (err) {
            console.log('enter delete catch');
            console.log('Inside err', err);
        }
    }
}
export default new TraineeController();
