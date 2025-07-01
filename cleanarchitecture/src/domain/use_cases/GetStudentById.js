module.exports = function GetStudentById(studentRepository) {
    return async function(id) {
        if (!id) throw new Error('ID is required');
        const student = await studentRepository.getById(id);
        if (!student) throw new Error('Student not found');
        return student;
    };
};
