import { Request, Response, NextFunction } from 'express';


export class Login {
    constructor() {}

    public async validarUsuario(req:Request):Promise<any> {
        console.log("MODELO");
        
        return {estatus: 1, respuesta: 'this is a test'}
        


    }
}