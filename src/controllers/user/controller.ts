import { Request, Response, NextFunction } from 'express';
import { userModel } from '../../repositories/User/UserModel';
import * as jwt from 'jsonwebtoken';
import IRequest from '../../IRequest';
import config from '../../config/configuration';
import UserRepository from '../../repositories/User/UserRepository';
import * as bcrypt from 'bcrypt';
class userController {
    static instance: userController;

    static getInstance() {
         if ( userController.instance) {
             return userController.instance;
         }
         userController.instance = new userController();
         return userController.instance;
    }
    userRepository: UserRepository = new UserRepository();
    get = async( req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('Inside get function of Trainee Controller');
          let resp =  await this.userRepository.find({deletedAt: undefined}, {}, {})
              if(resp)  {
                console.log('Response of Repo is', resp);
                res.send({
                    message: 'user fetch sucessfully',
                    data: resp
                });
            };
        } catch (err) {
            console.log('Inside err');
        }
    }
    update = async(req: Request, res: Response, next: NextFunction ) => {
        try {
            console.log('Inside put function of user Controller');
          let resp  = await this.userRepository.update(req.body.dataToUpdate);
            if (resp) {
                console.log('Response of Repo is', resp);
                res.send({
                    message: 'user updated sucessfully',
                    data: resp
                });
            }
            } catch (err) {
            console.log('Inside err', err);
        }

    }
    create = async( req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('Inside post function of user Controller');
           let resp = await this.userRepository.create(req.body);
             // tslint:disable-next-line: no-unused-expression
             if (resp)  {
                console.log('Response of Repo is', resp);
                res.send({
                    message: 'user created sucessfully',
                    data: resp
                });
            }
        } catch (err) {
            console.log('Inside err', err);
        }
    }
    delete = async( req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('Inside delete function of user Controller');
            console.log('id', req.params.id, this);
             let resp = await this.userRepository.delete(req.params.id);
             if (resp)  {
                console.log('Response of Repo is', resp);
                res.send({
                    message: 'user deleted sucessfully',
                    data: resp
                });
            }
        } catch (err) {
            console.log('enter delete catch');
            console.log('Inside err', err);
        }
    }
    login =  async( req: Request, res: Response, next: NextFunction) => {
        try {
            const { email, password } = req.body;
            console.log(email, password);

        const result =  await this.userRepository.findOne ({ 'email': email} );
                if (result) {
                    console.log(result.password, password);
                    console.log(bcrypt.compareSync(password, result.password));
                    if (bcrypt.compareSync(password, result.password)) {
                        console.log('result is', result.password, result.name);
                        console.log(result);
                        const token = jwt.sign({
                            result
                        }, config.Secret_Key ,  { expiresIn: '15m' });
                        console.log(token);
                        res.send({
                            data: token,
                            message: 'Login Permited',
                            status: 200
                        });
                    }
                    else {
                        console.log('database data', result.password, result.email );
                        res.send({
                            message: 'Password Doesnt Match',
                            status: 400
                        });
                    }
                }
                else {
                    res.send({
                        message: 'Email is not Registered',
                        status: 404
                    });
                }
        }
        catch (err) {
            res.send(err);
        }
    }

    me (req: IRequest, res: Response, next: NextFunction) {
        console.log('user' , req.user);
        const user = req.user;
        res.json({
            user
        });
    }
}

export default new userController();