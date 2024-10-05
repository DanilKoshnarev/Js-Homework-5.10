const express = require('express');
const app = express();
app.use(express.json());

let posts = [
    { id: 1, title: 'First Post', description: 'This is the first post.', publishedAt: '2024-09-29', author: 'Author 1' },
    { id: 2, title: 'Second Post', description: 'This is the second post.', publishedAt: '2024-09-28', author: 'Author 2' },
    { id: 3, title: 'Third Post', description: 'This is the third post.', publishedAt: '2024-09-27', author: 'Author 3' }
];

app.get('/posts', (req, res) => {
    res.render('posts', { posts });
});

app.get('/post/:id', (req, res) => {
    const postId = req.params.id;
    const post = posts.find(p => p.id === parseInt(postId));

    if (post) {
        res.render('post', { post });
    } else {
        res.render('post_not_found');
    }
});

app.post('/postcreate', (req, res) => {
    const newPost = req.body;
    newPost.id = posts.length + 1;
    posts.push(newPost);
    res.status(201).send(newPost);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
