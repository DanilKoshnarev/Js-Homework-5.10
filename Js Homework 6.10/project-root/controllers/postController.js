
const postService = require('../services/postService');

exports.getAllPosts = (req, res) => {
    const posts = postService.getAllPosts();
    res.render('posts', { posts });
};

exports.getPostById = (req, res) => {
    const postId = req.params.id;
    const post = postService.getPostById(postId);

    if (post) {
        res.render('post', { post });
    } else {
        res.render('post_not_found');
    }
};

exports.createPost = (req, res) => {
    const newPost = req.body;
    const createdPost = postService.createPost(newPost);
    res.status(201).send(createdPost);
};
