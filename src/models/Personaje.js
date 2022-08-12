import {DataTypes} from 'sequelize';
import {sequelize} from '../database/databease.js';


export const Personaje= sequelize.define('personaje',{
    id_personaje:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },imagen:{
        type:DataTypes.STRING.BINARY,
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