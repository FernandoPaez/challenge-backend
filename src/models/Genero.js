import {DataTypes} from 'sequelize';
import{sequelize}from '../database/databease.js';

export const Genero= sequelize.define('genero',{
    id_genero:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoincrement: true,
    },
    nombre:{
        type: DataTypes.STRING,
    },
    imagen:{
        type:DataTypes.STRING.BINARY,
    }
},
    {timestamps:false},
);