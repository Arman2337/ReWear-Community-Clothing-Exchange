const Item = require('../models/Item');

exports.addItem = async (req, res) => {
  try {
    const { title, description, category, type, size, condition, tags } = req.body;
    const imagePath = req.file ? req.file.path : null;

    const newItem = new Item({
      title,
      description,
      category,
      type,
      size,
      condition,
      tags: tags?.split(',') || [],
      imagePath,
      owner: req.user.id
    });

    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.find({ status: 'available' }).populate('owner', 'name');
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id).populate('owner', 'name');

    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }

    res.status(200).json(item);
  } catch (err) {
    console.error("getItemById error:", err);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getFeaturedItems = async (req, res) => {
  try {
    const items = await Item.find().limit(4); // Or use { featured: true } if you have that field
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Get latest items (sorted by createdAt descending)
exports.getLatestItems = async (req, res) => {
  try {
    const items = await Item.find().sort({ createdAt: -1 }).limit(8);
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Get all categories (if stored statically or as a collection)
exports.getAllCategories = async (req, res) => {
  try {
    const categories = ['Men', 'Women', 'Kids', 'Accessories', 'Shoes', 'Winterwear'];
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};