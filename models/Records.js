const mongoose = require('mongoose');

const RecordsSchema = mongoose.Schema({
    taskType: String,
    title: String,
    Description: String,
    ExpiryDate: {
        type: Date,
        default: Date.now,
    },
    areMasterWorkers: String,
    reward: String,
    workersCount: String,
});

module.exports = mongoose.model('Records', RecordsSchema);