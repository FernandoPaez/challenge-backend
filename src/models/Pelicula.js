import { DataTypes } from 'sequelize';
import { sequelize } from '../database/databease.js';
import { Genero } from './Genero.js';
import { Personaje } from './Personaje.js';



export const Pelicula = sequelize.define('peliculas', {
    id_pelicula: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    imagen: {
        type: DataTypes.STRING,
    },
    titulo: {
        type: DataTypes.STRING,
    },
    fecha: {
        type:DataTypes.DATE,
    },
    calificacion: {
        type: DataTypes.SMALLINT,
    },
   
},
    {
        timestamps: false,
    });



Pelicula.belongsToMany(Personaje, { through: 'per_pel' },
);

Pelicula.belongsToMany(Genero,{through:'pel_gen'},);