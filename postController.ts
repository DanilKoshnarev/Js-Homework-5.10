
import { Request, Response } from 'express';
import { getAllPosts as getAllPostsService, getPostById as getPostByIdService, createPost as createPostService } from '../services/postService';

export const getAllPosts = (req: Request, res: Response): void => {
    const posts = getAllPostsService();
    res.render('posts', { posts });
};

export const getPostById = (req: Request, res: Response): void => {
    const postId = req.params.id;
    const post = getPostByIdService(postId);

    if (post) {
        res.render('post', { post });
    } else {
        res.render('post_not_found');
    }
};

export const createPost = (req: Request, res: Response): void => {
    const newPost = req.body;
    const createdPost = createPostService(newPost);
    res.status(201).send(createdPost);
};
