import {Router} from 'express';
import {getPersonajes,createPersonaje, updatePersonaje, deletePersonaje} from '../controllers/personajes.controllers.js'
import upload from'../libs/multer.js';

const router=Router();


router.get("/characters",getPersonajes);
//router.post("/", createPersonaje);

router.post("/create",upload.single('file'),createPersonaje);
router.put("/update/:id_personaje" ,updatePersonaje);
router.delete("/delete/:id_personaje",deletePersonaje);


export default router;