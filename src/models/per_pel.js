import {DataTypes}from 'sequelize';
import {sequelize}from '../database/databease.js';

export const Per_pel=sequelize.define('per_pel',{
    id_personaje:{
        type:DataTypes.INTEGER,
        primaryKey:true,
    },
    id_pelicula:{
        type:DataTypes.INTEGER,
        primaryKey:true,
    }, 
},
{
    timestamps:false,
},)