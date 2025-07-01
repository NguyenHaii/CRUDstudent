const IStudentRepository = require('../../domain/repositories/IStudentRepository');
const StudentModel = require('../models/Student');

class MongoStudentRepository extends IStudentRepository {
    async add(student) {
        const newStudent = new StudentModel(student);
        return await newStudent.save();
    }

    async getById(id) {
        return await StudentModel.findOne({ id });
    }

    async getAll() {
        return await StudentModel.find();
    }

    async update(id, studentData) {
        const updated = await StudentModel.findOneAndUpdate(
            { id },
            { $set: studentData },
            { new: true }
        );
        return updated;
    }

    async delete(id) {
        const result = await StudentModel.deleteOne({ id });
        return result.deletedCount > 0;
    }
}

module.exports = MongoStudentRepository;
