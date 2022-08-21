import jwt from 'jsonwebtoken';
import sequelize from 'sequelize';
import { Usuario } from '../models/Usuario.js';

//import  '../config.js';


const secret = {
    SECRET: 'mysecretkey'
}


export const loginUsuario = async (req, res) => {
    const { user_name, pass } = req.body;

    const responce = await Usuario.findOne(
        {
            where: {
                user_name: user_name,
                pass: pass
            }
        }
    );

    const count = await Usuario.count();
    //console.log(responce); // 6


    if (!responce) {
        res.status(500).json('usuario incorrecto')
    }else{
        const user= {user_name,pass};
        const token= jwt.sign(user, secret.SECRET,{
           // expiresIn :3600 //1hr
        })
        res.json(token);
    }


}