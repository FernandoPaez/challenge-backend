import Sequelize from 'sequelize';

export const sequelize = new Sequelize('alkemy', 'postgres', 'dangerous', {
    host: 'localhost',
    dialect: 'postgres'
});