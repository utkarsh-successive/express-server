import UserRepository from '../repositories/User/UserRepository';

const userRepository: UserRepository = new UserRepository();

export default () => {
    userRepository.count()
        .then(res => {
            if (res === 0) {
                console.log('Data sending in progress');
                userRepository.create({ name: 'utka', role: 'Head-trainer', email: 'test@succesive.tech', password: 'node@123' });
                userRepository.create({ name: 'utkarsh', role: 'Trainer', email: 'test@succesive.tech', password: 'node@123' });
            }
        })
        .catch(err => console.log(err));

};