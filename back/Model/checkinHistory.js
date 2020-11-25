const mongoose = require('mongoose');
const checkinHistorySchema = new mongoose.Schema({
    role: String,
    userId: String,
    date: String,
    classId: String,
});
module.exports = mongoose.model('checkinHistory', checkinHistorySchema);
