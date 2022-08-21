import path from 'path';
import { } from '../libs/multer.js';
import { Personaje } from '../models/Personaje.js';



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

export async function createPersonaje(req, res) {
    const { nombre, edad, peso, historia } = req.body;

    const file = req.file.path;

    try {
        const newPersonaje = Personaje.create({
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
                    id_personaje: id_personaje
                }
        });
        //personaje.imagen=file;
        //await personaje.save();
        return res.json(personaje);
    } catch (error) {
        res.status(501).json(error)

    }

}