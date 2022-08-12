import {DataTypes}from 'sequelize';
import {sequelize} from '../database/databease.js';

export const Pel_gen = sequelize.define('pel_gen',{

   /*  id_pelicula:{
        type:DataTypes.INTEGER,
        primaryKey:true,
    },
    id_genero:{
        type:DataTypes.INTEGER,
        primaryKey:true,

    } */
},
{
    timestamps:false,
},
)