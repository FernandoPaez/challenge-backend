
import path from 'path';
import { } from '../libs/multer.js';
import { Personaje } from '../models/Personaje.js';
import { Pelicula } from '../models/Pelicula.js';
import { response } from 'express';
import sequelize, { json, where } from 'sequelize';



export async function getPersonajes(req, res) {
    try {
        const personajes = await Personaje.findAll({
            attributes: ['imagen', 'nombre']
        });
        res.json(personajes);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


export async function listaPersonajes(req, res) {
    try {
        const personajes = await Personaje.findAll({
        });
        res.json(personajes);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}




export async function createPersonaje(req, res) {
    const { nombre, edad, peso, historia } = req.body;
    const file = req.file.path;
    try {
        const newPersonaje = await Personaje.create({
            imagen: file,
            nombre,
            edad,
            peso,
            historia,
        })
        return res.json({ newPersonaje });

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export async function updatePersonaje(req, res) {
    const { id_personaje } = req.params;
    const { nombre, edad, peso, historia } = req.body;
    //const file = req.file.path;
    try {
        const personaje = await Personaje.update(
            {
                //imagen:file,
                nombre: nombre,
                edad: edad,
                peso: peso,
                historia: historia,
            }, {
            where: {
                id_personaje: id_personaje,
            }
        });
        //personaje.imagen=file;
        //await personaje.save();
        return res.json(personaje);
    } catch (error) {
        res.status(501).json(error)
    }
}



export async function deletePersonaje(req, res) {
    try {
        const { id_personaje } = req.params;

        const personaje = await Personaje.findByPk(id_personaje);

        if (personaje != null) {
            const personaje = await Personaje.destroy({
                where: { id_personaje }
            })
            res.status(200).json('Personaje eliminado');
        } else {
            res.status(501).json('Personaje no encontrado')
        }

    } catch (error) {
        res.status(501).json('Error al eliminar personaje')
    }
}

/* 5- Detalle Personaje */
export async function detallePersonaje(req, res) {
    try {
        const result = await Personaje.findAll(
            {
                include:
                {
                    model: Pelicula,
                    attributes: ['titulo'],
                },
            }
        )
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json('error');
    }
}

/* 6- Buesqueda de Personajes */
export async function getPersonajeNombre(req, res) {
    const { nombre } = req.params;
    try {

        const consulta = await Personaje.findOne({ where: { nombre: nombre } });
        res.status(200).json(consulta);

    } catch (error) {
        res.status(500).json('error al obtener la consulta')
    }
}

export async function getPersonajeEdad(req, res) {
    const { edad } = req.params;
    try {

        const consulta = await Personaje.findOne({ where: { edad: edad } });
        res.status(200).json(consulta);

    } catch (error) {
        res.status(500).json('error al obtener la consulta')
    }
}

export async function getPersonajePeso(req, res) {
    const { peso } = req.params;
    try {

        const consulta = await Personaje.findOne({ where: { peso: peso } });
        res.status(200).json(consulta);

    } catch (error) {
        res.status(500).json('error al obtener la consulta')
    }
}

export async function getPersonajeMovie(req, res) {

    try {
        const {id_pelicula}=req.params;
        const consulta= await Personaje.findAll({
            
            include:
            {
                model: Pelicula,
                attributes: ['titulo'],
                where:{id_pelicula:id_pelicula}
            },
            
            })
       
        res.status(200).json(consulta);
    } catch (error) {
        res.status(501).json('Error');
    }
  
}




/*  const { titulo } = req.params;
    try {
        const result = await Personaje.findOne(
            {
                where: { titulo: titulo },
                include:
                {
                    model: Pelicula,
                    attributes: ['titulo'],
                },
            }
        )
        res.status(200).json(result);

    } catch (error) {
        res.status(500).json('error');
    } */





