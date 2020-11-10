import * as mongooose from 'mongoose';

export default class Database {
    static open(connectionString) {
        return new Promise((resolve, reject) => {
            console.log('Inside open method', connectionString);
            mongooose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
                if (err) {
                    console.log('error occured inside open function', err);
                    reject(err);
                    return;
                }
                resolve(undefined);
            });
        });
    }

    static close(connectionString, callback) {
       console.log('Inside close method');
        mongooose.connection.close(connectionString, (err) => {
            if (err) {
                console.log('error occured inside close function', err);
                callback(err);
                return;
            }
            callback(undefined);
        });
    }
}
