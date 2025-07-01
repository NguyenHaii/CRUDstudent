const express = require('express');
const StudentController = require('../../application/controllers/StudentController');
const MongoStudentRepository = require('../repositories/MongoStudentRepository'); 

function createStudentRouter() {
    const router = express.Router();

    const studentRepository = new MongoStudentRepository();
    const studentController = new StudentController(studentRepository);

    router.post('/', (req, res) => studentController.createStudent(req, res));

    router.get('/', (req, res) => studentController.getAllStudents(req, res));

    router.get('/:id', (req, res) => studentController.getStudentById(req, res));

    router.put('/:id', (req, res) => studentController.updateStudent(req, res));

    router.delete('/:id', (req, res) => studentController.deleteStudent(req, res));

    return router;
}

module.exports = createStudentRouter;
