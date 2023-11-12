//console.log('Hola mundo, desde el backend!!!')
// import, export -> ES6 (ES Module - ESM)
// require, module.exports -> Common JS (CJS)

import express from "express";
import morgan from "morgan";
import cors from "cors";
import userRouter from './routes/userRoutes.js';

// 1. Iniciar la aplicación
const app = express();

// 2. Configuraciones generales
// Establecer un puerto

// toma el valor de PORT y si no hay nada, que tome el valor de 5000
const PORT = process.env.PORT || 5000; 
 
//console.log(process.env);

// 3. Middlewares
app.use(morgan("dev"));
app.use(cors()) // cross-origin-resource-sharing
app.use(express.json()); // El body llega como undefined si no agregamos esto

// 4. Configurar las rutas
app.use(userRouter);


// 5. Iniciar el loop del servidor
app.listen(PORT,()=>{
    console.log(`Servidor ejecutándose en el puerto ${PORT}`)
})
