import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllPosts = async () => {
  try {
    return await prisma.post.findMany();
  } catch (error) {
    handlePrismaError(error);
  }
};

export const getPostById = async (id: number) => {
  try {
    return await prisma.post.findUnique({ where: { id } });
  } catch (error) {
    handlePrismaError(error);
  }
};

export const createPost = async (data: any) => {
  try {
    return await prisma.post.create({ data });
  } catch (error) {
    handlePrismaError(error);
  }
};

const handlePrismaError = (error: any) => {
  if (error.code === 'P2002') {
    console.error('Unique constraint failed');
  } else if (error.code === 'P2015') {
    console.error('Record not found');
  } else if (error.code === 'P2019') {
    console.error('Input error');
  }
  throw error;
};
