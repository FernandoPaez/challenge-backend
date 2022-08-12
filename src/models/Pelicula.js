import { DataTypes } from 'sequelize';
import { sequelize } from '../database/databease.js';
import { Genero } from './Genero.js';
import { Personaje } from './Personaje.js';
import { Pel_gen} from './Pel-gen.js';


export const Pelicula = sequelize.define('peliculas', {
    id_pelicula: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    imagen: {
        type: DataTypes.STRING.BINARY,
    },
    titulo: {
        type: DataTypes.STRING,
    },
    fecha: {
        type: DataTypes.DATEONLY,
    },
    calificacion: {
        type: DataTypes.SMALLINT,
    },
    id_genero: {
        type: DataTypes.INTEGER,
    },
},
    {
        timestamps: false,
    });



Pelicula.belongsToMany(Personaje, { through: 'per_pel' },
);

Pelicula.belongsToMany(Genero,{through:'pel_gen'},);