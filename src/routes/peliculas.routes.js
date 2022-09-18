import { Router } from "express";
import { createPelicula, getDetallePelicula, getPeliculas} from '../controllers/peliculas.comtroller.js'
import upload from '../libs/multer.js';


const router= Router();


router.get("/",getPeliculas);
router.get("/lista",getDetallePelicula);

router.post("/create", upload.single('file'),createPelicula);//body form-data 

//router.get("/lista",getPersonajePel);

export default router;