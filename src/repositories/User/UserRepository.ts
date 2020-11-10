import * as mongoose from 'mongoose';
import { userModel } from './UserModel';
import IUserMOdel from './IUserModel';

export default class UserRepository {
    public static generateObjectId() {
        return String(mongoose.Types.ObjectId());
    }

    public find(query, projection ?: any, options ?: any): any {
        return userModel.find(query, projection, options);
    }

    public findOne(query): mongoose.DocumentQuery<IUserMOdel, IUserMOdel, {}> {
        return userModel.findOne(query).lean();
    }

    public create(data: any): Promise<IUserMOdel> {
        console.log('UserRepository:: create', data);
        const id = UserRepository.generateObjectId();
        const model = new userModel ({
            _id: id,
            ...data,
        });
        return model.save();
    }

    public count() {
        return userModel.countDocuments();
    }

    // public update(data: any): Promise<IUserMOdel> {
    //     console.log('UserRepository:: update', data);
    //     return userModel.update(data);
    // }
}