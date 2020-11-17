import { Request, Response, NextFunction } from 'express';
import { userModel } from '../../repositories/User/UserModel';
import * as jwt from 'jsonwebtoken';
import IRequest from '../../IRequest';
import config from '../../config/configuration'

class userController {
    static instance: userController;

    static getInstance() {
         if ( userController.instance) {
             return userController.instance;
         }
         userController.instance = new userController();
         return userController.instance;
    }
    get (req : Request, res : Response, next : NextFunction ) {
        try {
            console.log('inside get method of trainee controller');
            res.send({
                message: 'Trainee fetched successfully',
                data: [
                    {
                    name: 'Trainee1',
                    address: 'noida'
                    }
                ]
            });
        } catch ( err) {
            console.log('inside err', err);
        }

    }
    update (req : Request, res : Response, next : NextFunction ) {
        try {
            console.log('inside update method of trainee controller');
            res.send({
                message: ' Trainee update successfully ' ,
                data: [
                    {
                    name: 'Trainee1',
                    address: ' noida'
                    }
                ]
            });
        } catch (err) {
            console.log('inside err ', err);
        }

    }
    create (req : Request, res : Response, next : NextFunction ) {
        try {
            console.log('inside create method of trainee controller');
            res.send({
                message: ' Trainee created successfully ',
                data: [
                    {
                    name: 'Trainee1',
                    address: 'noida'
                    }
                ]
            });
        } catch ( err) {
            console.log('inside err', err);
        }

    }
    delete (req : Request, res : Response, next : NextFunction ) {
        try {
            console.log('inside delete method of trainee controller');
            res.send({
                message: 'Trainee deleted successfully',
                data: [
                    {
                    name: 'Trainee1',
                    address: 'noida'
                    }
                ]
            });
        } catch ( err) {
            console.log('inside err', err);
        }

    }
    login( req: Request, res: Response, next: NextFunction) {
        try {
            const { email, password } = req.body;
            console.log(email,password);

            userModel.findOne({email: email}).lean().then((result) => {
                if (result) {
                    if ((email === result.email) && (password === result.password)) {
                        console.log('result is', result.password, result.name);
                       // console.log(result,config.Secret_Key);
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

    me(req: IRequest, res: Response, next: NextFunction) {
        console.log('user' , req.user);
        const user = req.user;
        res.json({
            user
        });
    }
}

export default new userController();
