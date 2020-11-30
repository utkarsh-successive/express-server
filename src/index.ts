import config from './config/configuration';
import Server from './server';
console.log('Config is', config);
const server = new Server ( config );
server.bootstrap().run();