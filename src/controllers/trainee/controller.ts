import { Request, Response, NextFunction, query } from 'express';
import UserRepository from '../../repositories/User/UserRepository';
import * as bcrypt from 'bcrypt';
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
           let { skip , limit , sort ,search} = req.query;
          let query ;
           console.log("tomer",query);
           if (!(search === undefined || search.length === 0 )) {
            const regex = /\S+@\S+\.\S+/;
           query = (regex.test(String(search))) ? {email: search} : {name: search};
            }
           sort = (sort === undefined || sort.length === 0 ) ? 'createdAt' : sort;
            console.log('Inside get function of Trainee Controller');
           const resp = await this.userRepository.find({...query}, {}, { skip : Number(skip), limit : Number(limit), sort: { [String(sort)] : -1} });
             console.log('Response of Repo is', resp);
              let  traineecount =  await this.userRepository.count({role:'trainee'} );
                console.log("total traineecount in databasea are=",traineecount);
                res.send({
                status:"ok",
                message: 'Successfully fetched trainee ',
                data:{
                      count: traineecount,
                      records: resp
                }         
                });

        } catch (err) {
            console.log('Inside err');
            next({
                message: 'No record found',
                code: 404,
            })
        }
    }
    update = async(req: Request, res: Response, next: NextFunction ) => {
        try {
            console.log('Inside put function of trainee Controller');
           let resp = await this.userRepository.update(req.body.dataToUpdate);
             if (resp) {
                 console.log("password",resp.password );
                 if(resp.password !==undefined)
                 {
                    const salt = bcrypt.genSaltSync(10);
                   const hash = bcrypt.hashSync(resp.password, salt);
                     resp.password = hash;
                 }
                 console.log('Response of Repo is', resp);
                res.send({
                    status:"ok",
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
                    staus:"ok",
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
                    status:"ok",
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
