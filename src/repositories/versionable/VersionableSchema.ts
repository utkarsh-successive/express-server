import * as mongoose from 'mongoose';

class VersionableSchema extends mongoose.Schema {
    constructor(options, collections) {
        const versionedOptions = Object.assign({
            createdAt: {
                default: Date.now,
                type: Date
            },
            deletedAt: {
                required: false,
                type: Date
            },
            originalId: {
                required: true,
                type: String
            }
        }, options);
        super(versionedOptions, collections);
    }
}

export default VersionableSchema;