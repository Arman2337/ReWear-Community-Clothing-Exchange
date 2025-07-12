const Item = require('../models/Item');
const User = require('../models/User');
const SwapRequest = require("../models/SwapRequest");

// Redeem item via points
exports.redeemItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.itemId);
    const user = await User.findById(req.user.id);

    if (!item || item.status !== 'available') {
      return res.status(400).json({ message: 'Item not available' });
    }

    const cost = 50; // arbitrary point cost

    if (user.points < cost) {
      return res.status(400).json({ message: 'Not enough points' });
    }

    user.points -= cost;
    item.status = 'swapped';
    await user.save();
    await item.save();

    res.json({ message: 'Item redeemed!', item });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Swap request (mark item as pending)
exports.requestSwap = async (req, res) => {
  try {
    const item = await Item.findById(req.params.itemId);

    if (!item || item.status !== "available") {
      return res.status(400).json({ message: "Item not available" });
    }

    // Prevent users from requesting swap on their own item
    if (item.owner.toString() === req.user.id) {
      return res.status(400).json({ message: "You cannot request swap on your own item" });
    }

    const swap = new SwapRequest({
      item: item._id,
      requester: req.user.id,
      owner: item.owner,
      status: "pending",
    });

    item.status = "pending";
    await item.save();
    await swap.save();

    res.status(200).json({ message: "Swap requested!", item });
  } catch (err) {
    console.error("Swap request error:", err);
    res.status(500).json({ error: err.message });
  }
};
