import {DataTypes}from 'sequelize';
import {sequelize} from'../database/databease.js';
import { Usuario } from './Usuario.js';


export const Rol= sequelize.define('rol',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
},
descripcion:{
    type:DataTypes.STRING,
    

}
},
{timestamps:false,},);




