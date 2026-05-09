const SOSAlert = require('../models/SOSAlert');

// Create SOS Alert
exports.createAlert = async (req, res) => {
    try {
        const alert = new SOSAlert(req.body);
        await alert.save();
        res.status(201).json({ message: 'SOS Alert created successfully!', alert });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get All Alerts
exports.getAllAlerts = async (req, res) => {
    try {
        const alerts = await SOSAlert.find().populate('userId', 'name email');
        res.status(200).json(alerts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get Single Alert
exports.getAlertById = async (req, res) => {
    try {
        const alert = await SOSAlert.findById(req.params.id);
        if (!alert) return res.status(404).json({ message: 'Alert not found!' });
        res.status(200).json(alert);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update Alert
exports.updateAlert = async (req, res) => {
    try {
        const alert = await SOSAlert.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!alert) return res.status(404).json({ message: 'Alert not found!' });
        res.status(200).json({ message: 'Alert updated successfully!', alert });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete Alert
exports.deleteAlert = async (req, res) => {
    try {
        const alert = await SOSAlert.findByIdAndDelete(req.params.id);
        if (!alert) return res.status(404).json({ message: 'Alert not found!' });
        res.status(200).json({ message: 'Alert deleted successfully!' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};