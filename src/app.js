const express = require('express');

const port = (process.env.PORT || 3000); 

//Initializations
const app = express(); 

//Settings
app.set('port', port); 

//Middlewares
app.use(express.urlencoded({extended:false}));
app.use(express.json()); 

//Routes
app.use('/', require('./routes/movieRoutes'));

module.exports = app; 