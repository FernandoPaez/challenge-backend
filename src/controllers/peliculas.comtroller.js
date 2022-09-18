import { Personaje } from '../models/Personaje.js';

import { Pelicula } from '../models/Pelicula.js';



/* 7 - Listado de Peliculas */
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

/* 8- Detalle Pelicula */

export async function getDetallePelicula(req, res) {
    try {
        const result = await Pelicula.findAll(
            {
                include:
                {
                    model: Personaje,
                    attributes: ['nombre'],
                },
            }
        )
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json('error');
    }
}

/* 9 - Crud Peliculas */

export async function createPelicula(req,res){
    const {titulo,fecha,calificacion}= req.body;
    const file= req.file.path;

  try {
    const newPelicula=await Pelicula.create(
        {
           Imagen:file,
           titulo,
           fecha,
           calificacion,
        }
    )
    res.status(200).json(newPelicula);
  } catch (error) {
    res.status(500).json('error al crear nueva pelicula');
  }


}