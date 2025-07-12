const express = require('express');
const router = express.Router();
const { redeemItem, requestSwap } = require('../controllers/swapController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/redeem/:itemId', authMiddleware, redeemItem);
router.post('/swap/:itemId', authMiddleware, requestSwap);

module.exports = router;
