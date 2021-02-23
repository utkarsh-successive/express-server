import * as dotenv from 'dotenv';
import { Iconfig } from './IConfig';
const testenv = dotenv.config().parsed;
console.log(testenv);
const testconfig = testenv;
Object.freeze(testconfig);
export default testconfig;
