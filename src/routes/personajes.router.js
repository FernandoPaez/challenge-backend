import {Router} from 'express';
import {getPersonajes} from '../controllers/personajes.controllers.js'

const router=Router();


router.get("/",getPersonajes);


export default router;