const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const { addItem, getAllItems, getItemById } = require('../controllers/itemController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, upload.single('image'), addItem);
router.get('/', getAllItems);
router.get('/:id', getItemById);

module.exports = router;
