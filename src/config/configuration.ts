import * as dotenv from 'dotenv';
import { Iconfig } from './IConfig';
const enVars = dotenv.config().parsed;
console.log(enVars);
const config = enVars;
Object.freeze(config);
export default config;
