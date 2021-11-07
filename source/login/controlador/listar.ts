//import express from 'express';
import { Router } from 'express'
import { Login } from '../modelo/listar';
//const router = express.Router();
//import logger from '../../../../servicios/compartidos/logger';
//import autorizacion = require('../../../../servicios/compartidos/jwt');

class Listados {

    public router: Router;

    constructor() {
        this.router = Router();
        this.generarRutas();

    }//constructor

    /**
 * @description: Obtenemos todas las rutas creadas en un solo metodo
 * @param: N/A
 * @returns void
 * @memberof: constructor
 * @author: José Luis Gallardo - 2021
 */

    private generarRutas(): void {
        this.listadoPrueba1();

    }


    /**
 * @description: metodo 1
 * @param: N/A
 * @returns void
 * @memberof: generarRutas()
 * @author: José Luis Gallardo - 2021
 */    
    private listadoPrueba1(): void {
        this.router.get('/listar', /*autorizacion.verificarExistenciaToken*/ async function (req, res, next) {
            try {
                console.log("CONTROLADOR");

                let respuesta: any;
                let login = new Login();
                respuesta = await login.validarUsuario(req);
                console.log("RESPUESTA CONTROLADOR: ", respuesta);

                //respuesta = await actualizarModelo.actualizarPrimaVacacional(req);
                res.json(respuesta);
            }
            catch (error) {
                //logger.error("ERROR PUT [insertarPrimaVacacional]: ",error.toString());
                res.json(error);
                next(error);
            }
        });
    }



}

const listados = new Listados(); //instanciamos la clase


export default listados.router; //exportaos 
