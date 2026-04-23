const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const noteRoutes = require('./routes/note.routes');

dotenv.config();

const app = express();
app.use(express.json());

// Debug middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

const startServer = async () => {
  console.log('Starting server...');
  console.log('Mongo URI:', process.env.MONGO_URI.replace(/\/\w+:(\w+)@/, '//***:***@'));
  
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✓ MongoDB Connected');
    
    app.use('/api/notes', noteRoutes);
    
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`✓ Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('✗ Error:', error.message);
    process.exit(1);
  }
};

startServer();