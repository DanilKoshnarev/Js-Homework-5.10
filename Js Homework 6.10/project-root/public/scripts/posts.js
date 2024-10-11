document.getElementById('createPostButton').addEventListener('click', () => {
    const newPost = {
        title: 'New Post',
        description: 'This is a new post.',
        publishedAt: new Date().toISOString(),
        author: 'New Author'
    };

    fetch('http://localhost:3000/postcreate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Post created:', data);
        // Здесь можно добавить код для обновления списка постов на странице
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
