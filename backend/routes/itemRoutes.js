const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const { addItem, getAllItems, getItemById , getFeaturedItems, getLatestItems,
  getAllCategories, } = require('../controllers/itemController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, upload.single('image'), addItem);
router.get('/', getAllItems);
router.get('/featured', getFeaturedItems);
router.get('/latest', getLatestItems);
router.get('/categories', getAllCategories);
router.get('/:id', getItemById);
module.exports = router;
