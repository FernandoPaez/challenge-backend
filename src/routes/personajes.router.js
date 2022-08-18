import {Router} from 'express';
import {getPersonajes,createPersonaje} from '../controllers/personajes.controllers.js'
import upload from'../libs/multer.js';

const router=Router();


router.get("/",getPersonajes);
router.post("/", createPersonaje);

router.post("/subir",upload.single('file'),(req, res) => {
    console.log(req.file);
    res.send('El archivo se envio correctamente')});


export default router;