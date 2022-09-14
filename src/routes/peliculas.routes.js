import { Router } from "express";
import { getPeliculas, getPeliculasper} from '../controllers/peliculas.comtroller.js'




const router= Router();


router.get("/",getPeliculas);

//router.get("/lista",getPersonajePel);

export default router;