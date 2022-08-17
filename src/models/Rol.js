import {DataTypes}from 'sequelize';
import {sequelize} from'../database/databease.js';
import { Usuario } from './Usuario.js';


export const Rol= sequelize.define('rol',{
    rol_id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
},
descripcion:{
    type:DataTypes.STRING,
    

}
},
{timestamps:false,},);

//Usuario.hasOne(Rol,{});
Rol.hasMany(Usuario, {
    foreingKey: 'id_rol',
    sourceId: 'rol_id', 

});
    Usuario.belongsTo(Rol, {
      foreinKey: 'id_rol',
    targetId: 'rol_id',   
}) 




