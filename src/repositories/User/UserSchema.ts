import * as mongoose from 'mongoose';
import VersionableSchema from '../versionable/VersionableSchema';
export default class UserSchema extends VersionableSchema {
    constructor(collections: any) {
        const baseSchema = Object.assign({
            _id: String,
            name: String,
            email: String,
            role: String,
            password: String,
            city:String
        });
        super(baseSchema, collections);
    }
}
