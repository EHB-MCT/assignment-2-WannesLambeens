const mongoose = require('mongoose');

const MatchSchema = new mongoose.Schema(
    {
      team1: {
        type: String,
        required: [true, 'Ploeg 1 is verplicht'],
        trim: true,
        maxlength: [50, 'Ploegnaam mag maximaal 50 tekens lang zijn'],
      },
      team2: {
        type: String,
        required: [true, 'Ploeg 2 is verplicht'],
        trim: true,
        maxlength: [50, 'Ploegnaam mag maximaal 50 tekens lang zijn'],
      },
      score: {
        type: Number,
        required: [true, 'Score is verplicht'],
        min: [1, 'Score moet minimaal 1 zijn'],
        max: [5, 'Score mag maximaal 5 zijn'],
      },
    }
  );
  module.exports = mongoose.model('Match', MatchSchema);