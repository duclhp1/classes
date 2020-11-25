const mongoose = require('mongoose');
const classSchema = new mongoose.Schema({
    name: String,
    teacher: String,
    students: String,
    day: Number,
    fromTime: Number,
    toTime: Number,
});
module.exports = mongoose.model('class', classSchema);
