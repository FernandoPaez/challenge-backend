import { DataTypes } from 'sequelize';
import { sequelize } from '../database/databease.js';
import { Rol } from './Rol.js';

export const Usuario = sequelize.define('usuario', {
    userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true,
    },
    userName: {
        type: DataTypes.STRING,
    },

    pass: {
        type: DataTypes.STRING,
    },
    id_rol: {
        type: DataTypes.INTEGER,
    },
}, {
    timestamps: false,
});
//Usuario.hasOne(Rol,{});
Rol.hasMany(Usuario, {
    foreingKey: 'id_rol',
    sourceId: 'id',

});
    Usuario.belongsTo(Rol, {
    foreinKey: 'id_rol',
    targetId: 'id', 
}) 