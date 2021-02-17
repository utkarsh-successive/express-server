import UserRepository from '../repositories/User/UserRepository';
import CityRepository from '../repositories/city/CityRepository';
import config from '../config/configuration';
const userRepository: UserRepository = new UserRepository();
const cityRepository: CityRepository = new CityRepository();
export default () => {
    userRepository.count({})
        .then(res => {
            if (res === 0) {
                console.log('Data sending in progress');
                userRepository.create({ name: 'utka', role: 'head-trainer', email: 'testx@succesive.tech', password:'node@123',city:'Mumbai' });
                userRepository.create({ name: 'utkarsh', role: 'trainer', email: 'testy@succesive.tech', password: 'node#123', city:'Delhi'});
             }
        })
        //.catch(err => console.log(err));
        cityRepository.count({})
        .then(res => {
            if (res === 0) {
                console.log('Data sending in cityrepository ');
                cityRepository.create({name:'Delhi', code:'DL', language:'english'});
                cityRepository.create({name:'Uttar Pradesh', code:'UP', language:'Hindi'});
                cityRepository.create({name:'Mumbai', code:'MH', language:'marathi'});
                cityRepository.create({name:'Kolkata', code:'KL', language:'Bangla'});
            }
        })
        .catch(err => console.log(err));

};