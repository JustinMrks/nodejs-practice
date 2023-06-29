const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getStudents);

router.get('/:id', controller.getStudentByID);

router.post('/', controller.createStudent);

router.put('/:id', controller.editStudent);

router.delete('/:id', controller.delStudentByID);

module.exports = router;
