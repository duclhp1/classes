const mongoose = require('mongoose');
const classSchema = new mongoose.Schema({
    name: String,
    teacher: String,
    day: Number,
    fromTime: Number,
    toTime: Number,
    price: Number,
});
module.exports = mongoose.model('class', classSchema);
