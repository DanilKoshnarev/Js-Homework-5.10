const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const userRoleMiddleware = require('../middlewares/userRoleMiddleware');
const postController = require('../controllers/postController');

router.post('/post/create', authMiddleware, userRoleMiddleware, postController.createPost);

module.exports = router;
