import * as express from 'express';

class Server {
    app;
    constructor(private config) {
         this.app = express();
    }
    bootstrap() {
    this.setupRoutes();
    return this;
    }
    setupRoutes() {
        const { app } = this;
        app.get('/health-check', ( req, res, next) => {
              res.send('I am Ok');
        });
        return this;
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