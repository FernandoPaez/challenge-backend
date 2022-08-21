import { Personaje } from '../models/Personaje.js';
//import { Per_pel } from '../models/per_pel.js';
import { Pelicula } from '../models/Pelicula.js';


export async function getPeliculas(req, res) {
    try {
        const peliculas = await Pelicula.findAll({
            attributes: ['imagen', 'titulo','fecha']

        });

        res.json(peliculas);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}