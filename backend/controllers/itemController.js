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
    res.json(item);
  } catch (err) {
    res.status(404).json({ error: 'Item not found' });
  }
};
