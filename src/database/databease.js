import Sequelize from 'sequelize';

export  const sequelize = new Sequelize('alkemy2', 'postgres', 'dangerous', {
    host: 'localhost',
    dialect: 'postgres'
});