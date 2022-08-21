import { Router } from "express";
import {getUsuarios} from '../controllers/usuario.controller.js'
import { verifyToken } from "../middlewares/authentication.js";

const router= Router();


router.get('/',[verifyToken],getUsuarios);


export default router;
