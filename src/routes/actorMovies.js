import {Router} from 'express';
import {getPersonajePel} from '../controllers/ActorMovies.controllers.js'


const router= new Router();


router.get("/",getPersonajePel);

export default router; 