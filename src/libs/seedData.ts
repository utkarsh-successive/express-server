import UserRepository from '../repositories/User/UserRepository';
import config from '../config/configuration';
const userRepository: UserRepository = new UserRepository();

export default () => {
    userRepository.count({})
        .then(res => {
            if (res === 0) {
                console.log('Data sending in progress');
                userRepository.create({ name: 'utka', role: 'head-trainer', email: 'testx@succesive.tech', password:'node@123' });
                userRepository.create({ name: 'utkarsh', role: 'trainer', email: 'testy@succesive.tech', password: 'node#123' });
            }
        })
        .catch(err => console.log(err));

};