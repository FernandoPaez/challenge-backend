import { Router } from "express";
import { getPeliculas} from '../controllers/peliculas.comtroller.js'



const router= Router();


router.get("/",getPeliculas);

export default router;