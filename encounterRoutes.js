const express = require('express');
const router = express.Router();
const EncounterController = require('../controllers/encounterController');

// Encounter Start Endpoint
router.post('/start', EncounterController.startEncounter);

module.exports = router;
