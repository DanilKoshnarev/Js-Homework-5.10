let posts = [
    { id: 1, title: 'First Post', description: 'This is the first post.', publishedAt: '2024-09-29', author: 'Author 1' },
    { id: 2, title: 'Second Post', description: 'This is the second post.', publishedAt: '2024-09-28', author: 'Author 2' },
    { id: 3, title: 'Third Post', description: 'This is the third post.', publishedAt: '2024-09-27', author: 'Author 3' }
];

exports.getAllPosts = () => {
    return posts;
};

exports.getPostById = (id) => {
    return posts.find(post => post.id === parseInt(id));
};

exports.createPost = (newPost) => {
    newPost.id = posts.length + 1;
    posts.push(newPost);
    return newPost;
};
