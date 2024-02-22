const express = require('express');
const router = express.Router();

let anime = [
  {id: 1, anime_name: "naruto", genre: "Action, Fantasy"},
  {id: 2, anime_name: "naruto", genre: "Action, Fantasy"},
  {id: 3, anime_name: "naruto", genre: "Action, Fantasy"}
];

// Get all anime
router.get('/anime', (req, res) => {
  res.json(anime);
});

// Get a specific anime by ID
router.get('/anime/:id', (req, res) => {
  const animeId = parseInt(req.params.id);
  const foundAnime = anime.find(a => a.id === animeId);
  if (foundAnime) {
    res.json(foundAnime);
  } else {
    res.status(404).json({ message: 'Anime not found' });
  }
});

// Add a new anime
router.post('/anime', (req, res) => {
  const newAnime = {
    id: anime.length + 1,
    anime_name: req.body.anime_name,
    genre: req.body.genre
  };
  anime.push(newAnime);
  res.status(201).json(newAnime);
});

// Update an anime by ID
router.put('/anime/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedAnime = anime.find((item) => item.id === id);

  if (updatedAnime) {
    // Update properties based on request body
    if (req.body.anime_name) {
      updatedAnime.anime_name = req.body.anime_name;
    }
    if (req.body.genre) {
      updatedAnime.genre = req.body.genre;
    }

    res.json(updatedAnime);
  } else {
    res.status(404).json({ message: 'Anime not found' });
  }
});

// Delete an anime by ID
router.delete('/anime/:id', (req, res) => {
  const animeId = parseInt(req.params.id);
  anime = anime.filter(a => a.id !== animeId);
  res.status(204).send();
});

module.exports = router;
