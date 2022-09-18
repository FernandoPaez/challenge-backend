import { Router } from "express";
import { createPelicula, deleteMovie, getDetallePelicula, getPeliculaGenero, getPeliculaOrder, getPeliculas, getPeliculaTitulo, updatePelicula} from '../controllers/peliculas.comtroller.js'
import upload from '../libs/multer.js';


const router= Router();


router.get("/",getPeliculas);
router.get("/lista",getDetallePelicula);

router.post("/create", upload.single('file'),createPelicula);//body form-data 
router.put("/:id_pelicula",updatePelicula);//no funciona
router.delete("/delete/:id_pelicula", deleteMovie);

router.get("/name/:titulo",getPeliculaTitulo);
router.get("/genero/:id_genero",getPeliculaGenero);
router.get("/order",getPeliculaOrder);




export default router;