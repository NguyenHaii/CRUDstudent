module.exports = function UpdateStudent(studentRepository) {
    return async function(id, data) {
        if (!id) throw new Error('ID is required');
        const updatedStudent = await studentRepository.update(id, data);
        if (!updatedStudent) throw new Error('Update failed or student not found');
        return updatedStudent;
    };
};
