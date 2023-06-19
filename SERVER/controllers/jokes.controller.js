// controllers/jokes.controller.js
const Joke = require('../models/jokes.model');

module.exports.createJoke = (req, res) => {
  Joke.create(req.body)
    .then(newJoke => res.json({ joke: newJoke }))
    .catch(err => res.status(500).json({ error: err }));
};

module.exports.getAllJokes = (req, res) => {
  Joke.find()
    .then(allJokes => res.json({ jokes: allJokes }))
    .catch(err => res.status(500).json({ error: err }));
};

module.exports.getOneJoke = (req, res) => {
  Joke.findById(req.params.id)
    .then(joke => {
      if (!joke) {
        return res.status(404).json({ error: 'Joke not found' });
      }
      res.json({ joke });
    })
    .catch(err => res.status(500).json({ error: err }));
};

module.exports.updateJoke = (req, res) => {
  Joke.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(updatedJoke => {
      if (!updatedJoke) {
        return res.status(404).json({ error: 'Joke not found' });
      }
      res.json({ joke: updatedJoke });
    })
    .catch(err => res.status(500).json({ error: err }));
};

module.exports.deleteJoke = (req, res) => {
  Joke.findByIdAndDelete(req.params.id)
    .then(deletedJoke => {
      if (!deletedJoke) {
        return res.status(404).json({ error: 'Joke not found' });
      }
      res.json({ message: 'Joke deleted successfully' });
    })
    .catch(err => res.status(500).json({ error: err }));
};
