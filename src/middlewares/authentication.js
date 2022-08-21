const jwt= require('jsonwebtoken');
import sequelize from 'sequelize';
import {Usuario}from '../models/Usuario.js';

const loginUsuario = async(req,res)=>{
    const {user_name,pass}= req.body;

    const consulta= await Usuario.findOne(
       {where:{
        user_name:user_name,
        pass:pass
       }}
    )

    console.log(consulta);
}
