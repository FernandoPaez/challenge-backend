import { DataTypes } from 'sequelize';
import { sequelize } from '../database/databease.js';




export const actor_movie = sequelize.define('actor_movie', {


}, 
  
    { timestamps: false },
    );