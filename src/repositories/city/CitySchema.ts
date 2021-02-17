import * as mongoose from 'mongoose';
import VersionableSchema from '../versionable/VersionableSchema';
export default class CitySchema extends VersionableSchema {
    constructor(collections: any) {
        const baseSchema = Object.assign({
            name: String,
            code: String,
            language: String,
        });
        super(baseSchema, collections);
    }
}
