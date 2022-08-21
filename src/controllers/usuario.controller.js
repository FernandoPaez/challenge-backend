import jwt from 'jsonwebtoken';
import sequelize from 'sequelize';
import {Usuario}from '../models/Usuario.js';




export const createUsuario=async(req,res)=>{
    const{user_name,pass}=req.body;

    const consulta= Usuario.findOne({
        where:{user_name:user_name}
    })
    if(!consulta){
        const newUsuario= Usuario.create({
            user_name:user_name,
            pass:pass
        });
        return res.json(newUsuario);
    }else{
        res.json('el usuario ya existe')
    }

}

export const getUsuarios= async (req,res)=>{

    const consulta= await Usuario.findAll();
    res.json(consulta);
}
 