const express = require('express');
const router = express.Router();
const { redeemItem, requestSwap } = require('../controllers/swapController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/redeem/:itemId', authMiddleware, redeemItem);
router.post('/swap/:itemId', authMiddleware, requestSwap);
const SwapRequest = require('../models/SwapRequest');

router.get("/my-requests", authMiddleware, async (req, res) => {
  const requests = await SwapRequest.find({ requester: req.user.id })
    .populate("item")
    .populate("owner");
  res.json(requests);
});


module.exports = router;
