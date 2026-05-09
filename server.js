const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const userRoutes = require('./routes/userRoutes');
const emergencyContactRoutes = require('./routes/emergencyContactRoutes');
const sosAlertRoutes = require('./routes/sosAlertRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/contacts', emergencyContactRoutes);
app.use('/api/alerts', sosAlertRoutes);

// Test Route
app.get('/', (req, res) => {
    res.json({ message: 'SnapSafe API is Running!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});