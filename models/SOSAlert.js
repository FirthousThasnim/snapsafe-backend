const mongoose = require('mongoose');

const sosAlertSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    location: {
        type: String,
        required: true
    },
    message: {
        type: String,
        default: 'SOS! I need help!'
    },
    status: {
        type: String,
        enum: ['active', 'resolved'],
        default: 'active'
    }
}, { timestamps: true });

module.exports = mongoose.model('SOSAlert', sosAlertSchema);