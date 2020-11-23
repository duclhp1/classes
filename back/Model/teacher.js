const mongoose = require('mongoose');
const teacherSchema = new mongoose.Schema({
    name: String,
    img: String,
    parentPhone: String,
});
module.exports = mongoose.model('teacher', teacherSchema);
