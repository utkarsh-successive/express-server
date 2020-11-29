import * as mongoose from 'mongoose';
import { userModel } from './UserModel';
import IUserModel from './IUserModel';
import VersionableRepository from '../versionable/VersionableRepository';
import * as bcrypt from 'bcrypt';

export default class UserRepository extends VersionableRepository<IUserModel, mongoose.Model<IUserModel>> {
    static findOne: any;
    constructor() {
        super(userModel);
    }
    public static generateObjectId() {
        return String(mongoose.Types.ObjectId());
    }

    public find(query, projection ?: any, options ?: any): any {
        return super.getAll(query, projection, options);


    }

    public findOne(query): mongoose.DocumentQuery<IUserModel, IUserModel, {}> {
        return super.findOne(query).lean();
    }

    public create(data: any): Promise<IUserModel> {
        console.log('UserRepository:: create', data);
        const salt = bcrypt.genSaltSync(10);
         const hash = bcrypt.hashSync(data.password, salt);
        data.password = hash;
        return super.create(data);
    }

    public count(query ) {
        return super.count(query);
    }

    public update(data: any): Promise<IUserModel> {
        console.log('UserRepository:: update', data);
        return super.update(data);
    }
}
