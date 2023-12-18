const express = require('express');
const router = express.Router();
const VitalsController = require('../controllers/vitalsController');

// Vitals Submission Endpoint
router.post('/submit', VitalsController.submitVitals);

module.exports = router;
