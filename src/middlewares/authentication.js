import jwt from 'jsonwebtoken';
import sequelize from 'sequelize';
import secret from '../config.js';
import {Usuario}from '../models/Usuario.js';


export const verifyToken = async (req, res, next) => {

    const verify = req.headers["authorization"];
    console.log(verify);

    if (!verify) return res.status(501).json('acces denied')

    const token = req.headers.authorization.substr(7);

    if (req.headers.authorization !== ' ')
        try {
            const conten = jwt.verify(token, secret.SECRET);
            req.data = conten;
            next();

        } catch (error) {
            res.status(501).json('token incorrecto')
        }else{
            res.status(501).json('token vacio')
        };
}