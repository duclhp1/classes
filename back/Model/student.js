const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    name: String,
    img: String,
    parentPhone: String,
    parentName: String,
    address: String,
    dob: String,
});
module.exports = mongoose.model('student', studentSchema);
