const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://Arrghe:Fi8e0Q2EWMA7KPGk@cluster0.wvfgucy.mongodb.net/tickethack';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));