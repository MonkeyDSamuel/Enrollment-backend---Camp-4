const express = require('express');
const router = express.Router();
const stdCtrl = require('../controllers/studentController');
const {validateStudent} = require('../validators/studentValidator');
const {runValidation} = require('../validators/validate');

router.post('/', validateStudent, runValidation, stdCtrl.addStudent);
router.get('/', stdCtrl.getStudents);
router.get('/:id', stdCtrl.getStudent);
router.put('/:id', validateStudent, runValidation, stdCtrl.updateStudent);
router.delete('/:id', stdCtrl.deleteStudent);

module.exports = router;