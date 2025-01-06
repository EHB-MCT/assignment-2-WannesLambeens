const express = require('express');
const Match = require('../models/dataModels');

const router = express.Router();

// POST-route - Nieuwe wedstrijd opslaan
router.post('/', async (req, res) => {
  try {
    const { team1, team2, score } = req.body;

    const newMatch = await Match.create({ team1, team2, score });
    res.status(201).json(newMatch);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET-route - Haal alle wedstrijden op
router.get('/', async (req, res) => {
  try {
    const matches = await Match.find(); // Haal alle documenten op uit de Match-collectie
    res.status(200).json(matches); // Stuur de opgehaalde data als JSON terug
  } catch (error) {
    res.status(500).json({ error: 'Server error' }); // Stuur een foutmelding bij serverfouten
  }
});

module.exports = router;
