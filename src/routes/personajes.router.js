import {Router} from 'express';
import {getPersonajes,createPersonaje} from '../controllers/personajes.controllers.js'
import upload from'../libs/multer.js';

const router=Router();


router.get("/characters",getPersonajes);
//router.post("/", createPersonaje);

router.post("/create",upload.single('file'),createPersonaje);


export default router;