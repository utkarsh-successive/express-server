import * as mongoose from 'mongoose';
import IVersionableDocument from '../versionable/ IVersionableDocument';
export default interface ICityModel extends mongoose.Document {
    name: string;
    language: string;
    code: string;
}