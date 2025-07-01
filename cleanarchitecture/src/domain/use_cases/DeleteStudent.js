module.exports = function DeleteStudent(studentRepository) {
    return async function(id) {
        if (!id) throw new Error('ID is required');
        const success = await studentRepository.delete(id);
        if (!success) throw new Error('Delete failed or student not found');
        return success;
    };
};
