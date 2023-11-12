import express  from "express"; 
import { getUsers } from "../controllers/userController.js";

const router = express.Router();

// ej. obtener todos los usuarios
router.get("/", getUsers);

export default router; 
