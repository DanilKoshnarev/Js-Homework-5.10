
interface Post {
    id: number;
    title: string;
    description: string;
    publishedAt: string;
    author: string;
}

let posts: Post[] = [
    { id: 1, title: 'First Post', description: 'This is the first post.', publishedAt: '2024-09-29', author: 'Author 1' },
    { id: 2, title: 'Second Post', description: 'This is the second post.', publishedAt: '2024-09-28', author: 'Author 2' },
    { id: 3, title: 'Third Post', description: 'This is the third post.', publishedAt: '2024-09-27', author: 'Author 3' }
];

export const getAllPosts = (): Post[] => {
    return posts;
};

export const getPostById = (id: string): Post | undefined => {
    return posts.find(post => post.id === parseInt(id));
};

export const createPost = (newPost: Omit<Post, 'id'>): Post => {
    const post: Post = { ...newPost, id: posts.length + 1 };
    posts.push(post);
    return post;
};
