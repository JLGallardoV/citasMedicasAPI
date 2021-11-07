/** source/server.ts */
import http from 'http';
import express, { Express } from 'express';
import morgan from 'morgan';

//:::::::::::::::::::::::::::: obteniendo rutas :::::::::::::::::::::::::::::::::::::::
import test from './source/login/controlador/listar'


class Server {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    public config(): void {
        // Settings
        this.app.set('port', process.env.PORT || 4000);
        // middlewares
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
        //this.app.use(helmet());
        ///this.app.use(compression());
        //this.app.use(cors());
    }

    public routes(): void {
        const router: express.Router = express.Router();

        this.app.use('/API', test);
    }

    public start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server is listenning on port', this.app.get('port'));
        });
    }
}

let test2 = new Server();
test2.start();