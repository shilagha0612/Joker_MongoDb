const mongoose = require('mongoose');

const jokeSchema = new mongoose.Schema({
  jokeText: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const Joke = mongoose.model('Joke', jokeSchema);

module.exports = Joke;
