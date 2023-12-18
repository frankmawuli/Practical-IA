const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect('mongodb://localhost/ugmc_emr', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Middleware
app.use(express.json());

// Routes (create separate files for each functional requirement)
app.use('/patients', require('./routes/patientRoutes'));
app.use('/encounters', require('./routes/encounterRoutes'));
app.use('/vitals', require('./routes/vitalsRoutes'));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
