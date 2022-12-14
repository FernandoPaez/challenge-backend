import jwt from 'jsonwebtoken';
import sequelize from 'sequelize';
import { Usuario } from '../models/Usuario.js';

//import  '../config.js';


const secret = {
    SECRET: 'mysecretkey'
}


export const createUsuario=async(req,res)=>{
    const{user_name,pass}=req.body;

    const consulta= await Usuario.findOne({
        where:{user_name:user_name}
    })
    try {
        if(!consulta){
            const newUsuario= Usuario.create({
                user_name:user_name,
                pass:pass
            });
         return res.json('Usuario creado con exito.');
        }else{
            res.json('el usuario ya existe')
        } 
    
    } catch (error) {
        res.status(501).json(error);        
    }
  
  
}


export const loginUsuario = async (req, res) => {
    const { user_name, pass } = req.body;

    const consulta = await Usuario.findOne({
        where: { user_name: user_name }
    })
    if (!consulta) { res.status(501).json('usuario incorrecto') }
    else {
        try {
            const responce = await Usuario.findOne(
                {
                    where: {
                        user_name: user_name,
                        pass: pass
                    }
                });

            if (!responce) {
                res.status(500).json('contraseña incorrecta')
            } else {
                const user = { user_name, pass };
                const token = jwt.sign(user, secret.SECRET, {
                    // expiresIn :3600 //1hr
                })
                res.json(token);
            }

        } catch (error) {
            res.status(501).json(error)
        }
    }

}