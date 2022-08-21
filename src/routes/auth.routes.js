import { Router } from "express";
import { createUsuario, loginUsuario} from '../controllers/auth.controllers.js'
import { getPersonajes } from "../controllers/personajes.controllers.js";
import { verifyToken } from "../middlewares/authentication.js";

const router= Router();



router.post('/login',loginUsuario);
router.post('/register',createUsuario);

export default router;