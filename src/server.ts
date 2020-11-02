import * as express from 'express';
import * as bodyParser from 'body-parser';
import { notFoundHandler, errorHandler } from './libs/routes';
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
        app.use(notFoundHandler);
        app.use(errorHandler);
         return this;
    }
    public initBodyParser() {
        this.app.use(bodyParser.json({ type: 'application/*+json' }));
    }
    run() {
        const { app, config: { PORT } } = this;
        app.listen(PORT , ( err )  => {
            if ( err ) {
                 console.log( err );
            }
            console.log('App is running on port : ' + PORT );
        });
    }

}
export default Server;