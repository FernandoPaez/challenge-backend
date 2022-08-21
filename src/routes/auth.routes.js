import { Router } from "express";
import { loginUsuario} from '../controllers/auth.controllers.js'

const router= Router();



router.post('/',loginUsuario);

export default router;