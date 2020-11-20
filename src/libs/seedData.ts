import UserRepository from '../repositories/User/UserRepository';
import config from '../config/configuration';
import * as bcrypt from  'bcrypt';

const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(config.password, salt);
const hash1 = bcrypt.hashSync(config.password1, salt);
const userRepository: UserRepository = new UserRepository();

export default () => {
    userRepository.count()
        .then(res => {
            if (res === 0) {
                console.log('Data sending in progress');
                userRepository.create({ name: 'utka', role: 'Head-trainer', email: 'test@succesive.tech', password: hash });
                userRepository.create({ name: 'utkarsh', role: 'Trainer', email: 'test@succesive.tech', password: hash1 });
            }
        })
        .catch(err => console.log(err));

};