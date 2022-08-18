import express from 'express';

const app = express();

import personajesRoutes from './routes/personajes.router.js'


//routes
app.use('/api/personaje',personajesRoutes);

export default app