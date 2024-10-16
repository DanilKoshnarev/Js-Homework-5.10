import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const createSinglePost = async () => {
    await prisma.post.create({
        data: {
            title: 'Single Post',
            description: 'This is a single post.',
            publishedAt: new Date().toISOString(),
            author: 'Author 1'
        }
    });
};

const createMultiplePosts = async () => {
    await prisma.post.createMany({
        data: [
            {
                title: 'Post 1',
                description: 'This is the first post.',
                publishedAt: new Date().toISOString(),
                author: 'Author 1'
            },
            {
                title: 'Post 2',
                description: 'This is the second post.',
                publishedAt: new Date().toISOString(),
                author: 'Author 2'
            }
        ]
    });
};

const updateSinglePost = async (id: number) => {
    await prisma.post.update({
        where: { id },
        data: { title: 'Updated Post' }
    });
};

const getSinglePost = async (id: number) => {
    const post = await prisma.post.findUnique({
        where: { id }
    });
    console.log(post);
};

const getMultiplePosts = async () => {
    const posts = await prisma.post.findMany();
    console.log(posts);
};

const deleteSinglePost = async (id: number) => {
    await prisma.post.delete({
        where: { id }
    });
};

const main = async () => {
    await createSinglePost();
    await createMultiplePosts();
    await updateSinglePost(1);
    await getSinglePost(1);
    await getMultiplePosts();
    await deleteSinglePost(1);
};

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
