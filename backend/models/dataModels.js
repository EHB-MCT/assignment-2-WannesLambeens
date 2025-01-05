const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Naam is verplicht'],
      trim: true,
      maxlength: [50, 'Naam mag maximaal 50 tekens lang zijn'],
    },
    email: {
      type: String,
      required: [true, 'E-mail is verplicht'],
      trim: true,
    },
    message: {
      type: String,
      required: [true, 'Bericht is verplicht'],
      maxlength: [500, 'Bericht mag maximaal 500 tekens lang zijn'],
    },
  }
);

// Exporteer het model
module.exports = mongoose.model('Data', DataSchema);
