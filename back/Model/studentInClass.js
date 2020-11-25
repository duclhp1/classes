const mongoose = require('mongoose');
const studentInClassSchema = new mongoose.Schema({
    classId: String,
    studentId: String,
});
module.exports = mongoose.model('studentInClass', studentInClassSchema);
