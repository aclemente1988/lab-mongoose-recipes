const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
//console.log(Recipe);
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    //return Recipe.deleteMany()
  })
  .then(() => {
    return Recipe.insertMany(data);
  })
  .then(() => {
    return Recipe.findOneAndUpdate({title: "Rigatoni alla Genovese"}, {duration: 100}); console.log('Update Succesfully');
  })
  .then(() => {
    console.log('Update Succesfully');
  })
  .then(() => {
    return Recipe.deleteOne({title: "Carrot Cake"}) ;
  })
  .then(() => {
    return Recipe.create(data[4]);   
  })
  .then(() => {
    return mongoose.connection.close();   
  })
  
  .catch(error => {
    console.error('Error connecting to the database', error);
  });

 