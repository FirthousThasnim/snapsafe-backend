const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Register Admin
exports.register = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check already exists
        const existing = await Admin.findOne({ username });
        if (existing) {
            return res.status(400).json({ message: 'Admin already exists!' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Save admin
        const admin = new Admin({ username, password: hashedPassword });
        await admin.save();

        res.status(201).json({ message: 'Admin registered successfully!' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Login Admin
exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Find admin
        const admin = await Admin.findOne({ username });
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found!' });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid password!' });
        }

        // Generate token
        const token = jwt.sign(
            { id: admin._id },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

        res.status(200).json({ message: 'Login successful!', token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};