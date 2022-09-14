import { DataTypes } from 'sequelize';
import { sequelize } from '../database/databease.js';
import { Genero } from './Genero.js';
import { Personaje } from './Personaje.js';





export const Pelicula = sequelize.define('pelicula', {
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

    //Pelicula.belongsToMany(Personaje,{through: ActorMovies});
    Pelicula.belongsToMany(Genero,{through: 'pelicula_genero', timestamps: false,foreignKey:'genero_id' });
    Genero.belongsToMany(Pelicula,{through: 'pelicula_genero', timestamps: false,foreignKey:'pelicula_id' });




//Pelicula.belongsToMany(Personaje,{through:Per_pel},);
