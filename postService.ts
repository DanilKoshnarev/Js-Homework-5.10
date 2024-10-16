

import { PrismaClient, Post } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllPosts = async (): Promise<Post[]> => {
    return await prisma.post.findMany();
};

export const getPostById = async (id: string): Promise<Post | null> => {
    return await prisma.post.findUnique({
        where: { id: parseInt(id) }
    });
};

export const createPost = async (newPost: Omit<Post, 'id'>): Promise<Post> => {
    return await prisma.post.create({
        data: newPost
    });
};

export const updatePost = async (id: string, updatedData: Partial<Post>): Promise<Post | null> => {
    return await prisma.post.update({
        where: { id: parseInt(id) },
        data: updatedData
    });
};

export const deletePost = async (id: string): Promise<Post | null> => {
    return await prisma.post.delete({
        where: { id: parseInt(id) }
    });
};
