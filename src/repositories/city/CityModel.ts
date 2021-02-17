import * as mongoose from 'mongoose';

import CitySchema from './CitySchema';
import ICityModel from './ICityModel';

export const citySchema = new CitySchema({
    collectins: 'city',
});

export const CityModel: mongoose.Model<ICityModel> = mongoose.model<ICityModel>
    (
        'City',
        citySchema,
        'City',
        true,
    );