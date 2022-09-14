import { Personaje } from '../models/Personaje.js';

import { Pelicula } from '../models/Pelicula.js';



export async function getPeliculas(req, res) {
    try {
        const peliculas = await Pelicula.findAll({
            attributes: ['imagen', 'titulo', 'fecha']

        });

        res.json(peliculas);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


export async function getPeliculasper(req, res) {
    try {
        const peliculas = await Pelicula.findAll({
          //  include: Per_pel,
            attributes: ['titulo', 'id_personaje','id_pelicula' ]
        });

        res.json(peliculas);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}