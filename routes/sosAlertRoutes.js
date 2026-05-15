const express = require('express');
const router = express.Router();
const {
    createAlert,
    getAllAlerts,
    getAlertById,
    updateAlert,
    deleteAlert
} = require('../controllers/sosAlertController');
const protect = require('../middleware/authMiddleware');

router.post('/', protect, createAlert);
router.get('/', protect, getAllAlerts);
router.get('/:id', protect, getAlertById);
router.put('/:id', protect, updateAlert);
router.delete('/:id', protect, deleteAlert);

module.exports = router;