import { Router } from "express";
import { loginUsuario} from '../controllers/auth.controllers.js'
import { getPersonajes } from "../controllers/personajes.controllers.js";
import { verifyToken } from "../middlewares/authentication.js";

const router= Router();



router.post('/',loginUsuario);
//router.get('/',[verifyToken],getPersonajes)

export default router;