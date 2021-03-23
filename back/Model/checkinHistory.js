const mongoose = require('mongoose');
const checkinHistorySchema = new mongoose.Schema({
    role: String,//teacher / student
    userId: String,
    date: String,
    classId: String,
    state: String, //checked/other
});
module.exports = mongoose.model('checkinHistory', checkinHistorySchema);
