import path from 'path';
import { } from '../libs/multer.js';
import { Personaje } from '../models/Personaje.js';
import { Pelicula } from '../models/Pelicula.js';



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




export async function createPersonaje ( req, res) {
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

export async function  updatePersonaje(req, res) {
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

        const personaje=await Personaje.findByPk(id_personaje);

        if(personaje != null){
            const personaje = await Personaje.destroy({
                where: { id_personaje }
            })
            res.status(200).json('Personaje eliminado');
        }else{
            res.status(501).json('Personaje no encontrado')
        }




        
    } catch (error) {
        res.status(501).json('Error al eliminar personaje')
    }
}