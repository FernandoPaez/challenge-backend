import { DataTypes } from 'sequelize';
import { sequelize } from '../database/databease.js';
//import { Rol } from './Rol.js';

export const Usuario = sequelize.define('usuario', {
    userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_name: {
        type: DataTypes.STRING,
    },

    pass: {
        type: DataTypes.STRING,
    },
   
}, {
    timestamps: false,
},)