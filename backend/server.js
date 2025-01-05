require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Express App
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000, // Verbindt binnen 5 seconden of faalt
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1); // Stop de server als MongoDB niet kan verbinden
  }
};

// Routes
app.get('/', (req, res) => {
  res.send('API is running');
});

// Importeer en gebruik extra routes
const dataRoutes = require('./routes/dataRoutes');
app.use('/api/data', dataRoutes);

// Start Server
const startServer = async () => {
  await connectDB(); // Verbind met de database voordat de server start
  const PORT = process.env.PORT || 5001;
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
};

startServer();
