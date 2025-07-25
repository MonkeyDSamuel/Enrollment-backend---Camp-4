const express = require('express');
const router = express.Router();
const crCtrl = require('../controllers/courseController');
const {validateCourse} = require('../validators/courseValidator');
const {runValidation} = require('../validators/validate');

router.post('/', validateCourse, runValidation, crCtrl.addCourse);
router.get('/', crCtrl.getCourses);
router.get('/:id', crCtrl.getCourse);
router.put('/:id', validateCourse, runValidation, crCtrl.updateCourse);
router.delete('/:id', crCtrl.deleteCourse);

module.exports = router;