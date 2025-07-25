const express = require('express');
const router = express.Router();
const enrCtrl = require('../controllers/enrollmentController');
const {validateEnrollment} = require('../validators/enrollmentValidator');
const {runValidation} = require('../validators/validate');

router.post('/', validateEnrollment, runValidation, enrCtrl.addEnrollments);
router.get('/', enrCtrl.getEnrollments);
router.get('/:id', enrCtrl.getEnrollment);
router.put('/:id', validateEnrollment, runValidation, enrCtrl.updateEnrollment);
router.delete('/:id', enrCtrl.deleteEnrollment);

module.exports = router;