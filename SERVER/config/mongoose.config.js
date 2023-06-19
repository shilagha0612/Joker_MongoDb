// config/mongoose.config.js
const mongoose = require('mongoose');
// const username = process.env.DB;
// const password = process.env.DB;
// const dbName = process.env.DB;

const username = process.env.ATLAS_USERNAME;
const pw = process.env.ATLAS_PASSWORD;
const database=process.env.ATLAS_DATABASE;

// const uri = `mongodb+srv://${username}:${pw}@cluster0.aau1klc.mongodb.net/${database}`;
const uri = `mongodb+srv://dshilagha:Sahil0612@cluster0.aau1klc.mongodb.net/jokesdb`;
mongoose.connect(uri)
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));