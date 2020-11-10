import UserRepository from '../repositories/User/UserRepository';

const userRepository: UserRepository = new UserRepository();

export default () => {
    userRepository.count()
        .then(res => {
            if (res === 0) {
                console.log('Data sending in pregress');
                userRepository.create({ name: 'PersonX', role: 'Head-trainer', email: 'test@succesive.tech', password: 'node@123' });
                userRepository.create({ name: 'PersonY', role: 'Trainer', email: 'test@succesive.tech', password: 'node@123' });
            }
        })
        .catch(err => console.log(err));

};