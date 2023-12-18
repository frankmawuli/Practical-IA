const express = require('express');
const router = express.Router();
const PatientController = require('../controllers/patientController');

// Patient Registration Endpoint
router.post('/register', PatientController.register);

// List of Patients Endpoint
router.get('/', PatientController.listPatients);

// Patient Details Endpoint
router.get('/:patientId', PatientController.getPatientDetails);

module.exports = router;
