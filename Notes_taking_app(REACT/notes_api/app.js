//const express = require('express');
import express from 'express';
// import chalk from 'chalk';
import chalk from 'chalk';
import dotenv from 'dotenv';
//import {connection} from './src/shared/db/connection.js';
import noteRoutes from './src/modules/notes/routes/note-route.js';
import { CreateConnection } from './src/shared/db/connection.js';
const app = express(); // here we call express function and get then app function
dotenv.config(); // It will read .env and load env variables in process.env
//app.use(connection);
//ATTACH ROUTE AS MIDDLEWARE
//app.get('/', (req, res) => res.send('Jai Shri Ram'));
app.use(express.json());
app.use('/',noteRoutes);
const server = app.listen(process.env.PORT || 1234, (err) => {
    if(err){
        console.log(chalk.red.bgWhiteBright.bold('Server Crash'), err);
        
        
    }
    else{
        console.log(chalk.blue.bgGreen.bold('Server is running'), chalk.bgCyan.bold(server.address().port));
        CreateConnection();
    }
});