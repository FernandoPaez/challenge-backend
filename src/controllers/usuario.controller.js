import jwt from 'jsonwebtoken';
import sequelize from 'sequelize';
import {Usuario}from '../models/Usuario.js';





export const getUsuarios= async (req,res)=>{

    const consulta= await Usuario.findAll();
    res.json(consulta);
}
 