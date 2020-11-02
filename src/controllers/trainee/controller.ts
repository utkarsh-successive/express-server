class TraineeController {
    static instance: TraineeController;

    static getInstance() {
         if ( TraineeController.instance) {
             return TraineeController.instance;
         }
         TraineeController.instance = new TraineeController();
         return TraineeController.instance;
    }
    get (req : REQUEST, res : RESOURCE, next : NEXTFUNCTION ) {
        try {
            console.log('inside get method of trainee controller');
            res.send({
                message: 'Trainee fetched successfully',
                date: [
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
    update (req : REQUEST, res : RESOURCE, next : NEXTFUNCTION ) {
        try {
            console.log('inside update method of trainee controller');
            res.send({
                message: ' Trainee update successfully ' ,
                date: [
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
    create (req : REQUEST, res : RESOURCE, next : NEXTFUNCTION ) {
        try {
            console.log('inside create method of trainee controller');
            res.send({
                message: ' Trainee created successfully ',
                date: [
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
    delete (req : REQUEST, res : RESOURCE, next : NEXTFUNCTION ) {
        try {
            console.log('inside delete method of trainee controller');
            res.send({
                message: 'Trainee deleted successfully',
                date: [
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

export default new TraineeController();
