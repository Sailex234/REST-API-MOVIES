const { Sequelize } = require('sequelize');
const movieModel = require('../models/movieModel');

//constructor, generate the database
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './api_movies.sqlite'
});

const movie = movieModel(sequelize, Sequelize);

//The sync method syncs the model to the database. This creates the table if it doesn't exist (and does nothing if it already exists).
sequelize.sync().then(() => {
  console.log("Successful connection. Table synchronized.");
}).catch(error => {
  console.log(`There was an error: ${error}`);
})

module.exports = {          
  movie 
}