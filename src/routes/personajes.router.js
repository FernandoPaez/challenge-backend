import {Router} from 'express';
import {getPersonajes,createPersonaje, updatePersonaje} from '../controllers/personajes.controllers.js'
import upload from'../libs/multer.js';

const router=Router();


router.get("/characters",getPersonajes);
//router.post("/", createPersonaje);

router.post("/create",upload.single('file'),createPersonaje);
router.post("/update/:id_personaje" ,updatePersonaje);


export default router;