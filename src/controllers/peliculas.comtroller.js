import { Personaje } from '../models/Personaje.js';

import { Pelicula } from '../models/Pelicula.js';
import { Genero } from '../models/Genero.js';



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

export async function createPelicula(req, res) {
    const { titulo, fecha, calificacion } = req.body;
    const file = req.file.path;

    try {
        const newPelicula = await Pelicula.create(
            {
                Imagen: file,
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


export async function updatePelicula(req, res) {
    const { id_pelicula } = req.params;
    const { titulo, fecha, calificacion } = req.body;
    try {
        const pelicula = await Pelicula.update(
            {
                titulo,
                fecha,
                calificacion,
            }, {
            where: {
                id_pelicula: id_pelicula,
            }
        });
        res.status(200).json(pelicula);
    } catch (error) {
        res.status(501).json('No se pudo actualizar')
    }
}


export async function deleteMovie(req, res) {
    const { id_pelicula } = req.params;

    const pelicula = await Pelicula.findByPk(id_pelicula);

    if (pelicula != null) {
        const pel = await Pelicula.destroy({
            where: { id_pelicula }
        })
        res.status(200).json('Pelicula eliminada');
    } else {
        res.status(501).json('Pelicula no encontrada')
    }
}


/* 10 -Busqueda de Pelicula */
export async function getPeliculaTitulo(req, res) {
    const { titulo } = req.params;
    try {

        const consulta = await Pelicula.findOne({ where: { titulo: titulo } });
        res.status(200).json(consulta);

    } catch (error) {
        res.status(500).json('error al obtener la consulta')
    }
}


export async function getPeliculaGenero(req, res) {
    const { id_genero } = req.params;
    try {
        const result = await Pelicula.findAll(
            {
                include:
                {
                    model: Genero,
                    attributes: ['nombre'],
                    where: { id_genero: id_genero }
                },
            }
        )
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json('error al obtener la consulta')
    }
}

export async function getPeliculaOrder(req, res) {
    try {
        const result = await Pelicula.findAll(
            {
                include:
                {
                    model: Genero,
                    attributes: ['nombre']
                },
                order: [
                    ["fecha", "ASC"],
                   
                ],
            }
        )
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json('Error alrealizar la busqueda')
    }
}
