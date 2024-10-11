
const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get('/posts', postController.getAllPosts);
router.get('/post/:id', postController.getPostById);
router.post('/postcreate', postController.createPost);

module.exports = router;
