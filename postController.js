const createPost = (req, res) => {
  // Логика создания поста
  res.status(201).json({ message: 'Post created successfully' });
};

module.exports = {
  createPost,
};
