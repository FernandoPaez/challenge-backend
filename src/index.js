import app from './app.js';
import { sequelize } from './database/databease.js';
import './models/Pelicula.js';
import './models/Personaje.js';
import './models/Genero.js';
import './models/Usuario.js';
import './models/Rol.js';
import './models/per_pel.js'
import './models/Pel-gen.js';


async function main() {
    try {
        await sequelize.sync({force:true});
        app.listen(3000);
        console.log('server on port 3000');
    } catch (error) {
        console.error('Unabable to connect to database', error);
    }

}

main();
