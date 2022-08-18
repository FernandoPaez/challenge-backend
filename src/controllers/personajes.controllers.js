
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