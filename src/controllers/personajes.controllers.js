import path from 'path';
import {}from '../libs/multer.js';
import {Personaje}from '../models/Personaje.js';



export async function getPersonajes(req,res){
    try {
        const personaje= await Personaje.findAll();
        res.json(personaje);
        console.log('getting personaje');
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export async function createPersonaje(req,res){
    const {nombre,edad,peso,historia} = req.body;
       
    const file = req.file.path;

     try {
        const newPersonaje =Personaje.create({
            imagen:file,
            nombre,
            edad,
            peso,
            historia,
        })
        
        return res.json({newPersonaje});
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
  

}
