import { Request, Response, NextFunction } from 'express';
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
}

export default new userController();
