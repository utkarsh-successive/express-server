import { Request, Response, NextFunction } from 'express';
import { userModel } from '../../repositories/User/UserModel';
import * as jwt from 'jsonwebtoken';
import IRequest from '../../IRequest';
import config from '../../config/configuration';
import UserRepository from '../../repositories/User/UserRepository';
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
    login( req: Request, res: Response, next: NextFunction) {
        try {
            const { email, password } = req.body;
            console.log(email, password);

            this.userRepository.findOne({ 'email': email} ).lean().then((result) => {
                if (result) {
                    if ((email === result.email) && (password === result.password)) {
                        console.log('result is', result.password, result.name);
                        const token = jwt.sign({
                            ...result
                        }, config.Secret_Key);

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
            });
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
