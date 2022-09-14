import {DataTypes} from 'sequelize';
import {sequelize} from '../database/databease.js';

import { Pelicula } from './Pelicula.js';



export const Personaje= sequelize.define('personaje',{
    id_personaje:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },imagen:{
        type:DataTypes.STRING,
    },
    nombre:{
        type:DataTypes.STRING,
    },
    edad:{
        type: DataTypes.INTEGER,
    },
    peso:{
        type: DataTypes.DECIMAL(5,2),
    },
    historia:{
        type:DataTypes.STRING,
    },
},
    {timestamps:false},
);

Personaje.belongsToMany(Pelicula, { through: 'actor_movie',timestamps: false,foreignKey:'personaje_id'});
Pelicula.belongsToMany(Personaje,{through:'actor_movie',timestamps: false,foreignKey:'pelicula_id'});