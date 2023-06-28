const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getStudents);

router.get('/:id', controller.getStudentById);

router.post('/', controller.createStudent);

module.exports = router;