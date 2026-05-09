const EmergencyContact = require('../models/EmergencyContact');

// Create Contact
exports.createContact = async (req, res) => {
    try {
        const contact = new EmergencyContact(req.body);
        await contact.save();
        res.status(201).json({ message: 'Contact created successfully!', contact });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get All Contacts
exports.getAllContacts = async (req, res) => {
    try {
        const contacts = await EmergencyContact.find().populate('userId', 'name email');
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get Single Contact
exports.getContactById = async (req, res) => {
    try {
        const contact = await EmergencyContact.findById(req.params.id);
        if (!contact) return res.status(404).json({ message: 'Contact not found!' });
        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update Contact
exports.updateContact = async (req, res) => {
    try {
        const contact = await EmergencyContact.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!contact) return res.status(404).json({ message: 'Contact not found!' });
        res.status(200).json({ message: 'Contact updated successfully!', contact });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete Contact
exports.deleteContact = async (req, res) => {
    try {
        const contact = await EmergencyContact.findByIdAndDelete(req.params.id);
        if (!contact) return res.status(404).json({ message: 'Contact not found!' });
        res.status(200).json({ message: 'Contact deleted successfully!' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};