const express = require('express');
const Data = require('../models/dataModels');

const router = express.Router();

// POST route - Create new data
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newData = await Data.create({ name, email, message });
    res.status(201).json(newData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
// GET route - Fetch all data
router.get('/', async (req, res) => {
  try {
    const allData = await Data.find();
    res.status(200).json(allData);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
