import * as mongoose from 'mongoose';
import { CityModel } from './CityModel';
import ICityModel from './ICityModel';
import VersionableRepository from '../versionable/VersionableRepository';
import * as bcrypt from 'bcrypt';

export default class CityRepository extends VersionableRepository<ICityModel, mongoose.Model<ICityModel>> {
    static findOne: any;
    constructor() {
        super(CityModel);
    }
    public static generateObjectId() {
        return String(mongoose.Types.ObjectId());
    }

    public find(query, projection ?: any, options ?: any): any {
        return super.getAll(query, projection, options);


    }

    public findOne(query): mongoose.DocumentQuery<ICityModel, ICityModel, {}> {
        return super.findOne(query).lean();
    }

    public create(data: any): Promise<ICityModel> {
        return super.create(data);
    }

    public count(query ) {
        return super.count(query);
    }

    public update(data: any): Promise<ICityModel> {
        console.log('UserRepository:: update', data);
        return super.update(data);
    }
}
