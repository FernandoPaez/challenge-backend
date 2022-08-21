import express from 'express';
import morgan from 'morgan';

const app = express();


app.use(express.json());
app.use(morgan('dev'));


import personajesRoutes from './routes/personajes.router.js';
import  usuariosRoutes from  './routes/usuarios.routes.js';
import authRoutes from './routes/auth.routes.js';
import peliculasRoutes from './routes/peliculas.routes.js';

//routes
app.use('/api/personajes',personajesRoutes);
app.use('/api/usuarios',usuariosRoutes);
app.use('/api/auth',authRoutes);
app.use('/api/movies',peliculasRoutes);


export default app;