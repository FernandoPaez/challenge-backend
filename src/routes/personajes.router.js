import { Router } from 'express';
import {
    getPersonajes, createPersonaje, updatePersonaje, deletePersonaje, listaPersonajes,
    detallePersonaje, getPersonajeNombre,getPersonajeEdad,getPersonajePeso, getPersonajeMovie
} from '../controllers/personajes.controllers.js'
import upload from '../libs/multer.js';


const router = Router();


router.get("/characters", getPersonajes);
router.get("/lista", listaPersonajes);

router.post("/create", upload.single('file'), createPersonaje);//body form-data 
router.put("/update/:id_personaje", updatePersonaje);//enviar datos en postman body raw json 
router.delete("/delete/:id_personaje", deletePersonaje);


router.get("/detalle", detallePersonaje);
router.get("/characters/name/:nombre", getPersonajeNombre);
router.get("/characters/age/:edad", getPersonajeEdad);
router.get("/characters/peso/:peso", getPersonajePeso);

router.get("/characters/movies/:id_pelicula", getPersonajeMovie);





export default router;