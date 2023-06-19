const express = require('express');
const app = express();
require('dotenv').config();

const port = 8000;

// Step 2 - configure express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./config/mongoose.config');

// Routes for the "jokes" resource
const jokeRoutes = require('./routes/jokes.routes');
app.use(jokeRoutes);

// Step 4 - listen on a port and provide some feedback
app.listen(port, () =>
  console.log(`Welcome to the Death Star! We're connected to bridge port ${port}`)
);
