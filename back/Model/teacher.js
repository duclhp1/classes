const mongoose = require('mongoose');
const teacherSchema = new mongoose.Schema({
    name: String,
    img: String,
    phone: String,
    address: String,
    dob: String,
});
module.exports = mongoose.model('teacher', teacherSchema);
