import * as express from 'express';
import * as bodyParser from 'body-parser';
import { notFoundHandler, errorHandler } from './libs/routes';
import mainRouter  from './router';
import Databse from './libs/database';

class Server {
    app;
    constructor(private config) {
         this.app = express();
    }
    bootstrap() {
    this.setupRoutes();
    this.initBodyParser();
    return this;
    }
    public setupRoutes() {
         const { app } = this;
        app.get('/health-check', ( req, res, next) => {
              res.send('I am Ok');
        });
        app.use('/api', mainRouter);
        app.use(notFoundHandler);
        app.use(errorHandler);
        

         return this;
    }
    public initBodyParser() {
        this.app.use(bodyParser.json({ type: 'application/*+json' }));
    }
    run() {
        const { PORT, NODE_ENV , MONGO_URL } = this.config;

        Databse.open(MONGO_URL)
            .then((res) => {
                console.log('Succesfully connect with MongoDB');
                this.app.listen(PORT, () => {
                    const message = `|| App is running at port '${PORT}' in '${NODE_ENV}' mode ||`;
                    console.log(message);
                });
            })
            .catch((err) => console.log(err));

        // Databse.close(MONGO_URL, (err) => {
        //     if (err) {
        //         console.log('error occured', err);
        //         return;
        //     }
        //     console.log('Succesfully disconnect with MongoDB');
        // });
        return this;
      /*  const { app, config: { PORT } } = this;
        app.listen(PORT , ( err )  => {
            if ( err ) {
                 console.log( err );
            }
            console.log('App is running on port : ' + PORT );*/
    }

}
export default Server;