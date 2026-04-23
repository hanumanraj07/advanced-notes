const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/notes', require('./routes/note.routes'));

module.exports = app;