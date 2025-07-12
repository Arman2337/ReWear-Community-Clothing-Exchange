const Item = require('../models/Item');
const User = require('../models/User');

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

    if (!item || item.status !== 'available') {
      return res.status(400).json({ message: 'Item not available' });
    }

    item.status = 'pending'; // can later be approved
    await item.save();

    res.json({ message: 'Swap requested!', item });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
