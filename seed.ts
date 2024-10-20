const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const post = await prisma.post.create({
    data: {
      title: 'First Post',
      content: 'This is the content of the first post',
    },
  });

  const comment = await prisma.comment.create({
    data: {
      title: 'First Comment',
      body: 'This is the body of the first comment',
      postId: post.id,
    },
  });

  console.log({ post, comment });
}

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
async function createMultipleComments() {
  const post = await prisma.post.create({
    data: {
      title: 'Second Post',
      content: 'This is the content of the second post',
    },
  });

  const comments = await prisma.comment.createMany({
    data: [
      {
        title: 'Comment 1',
        body: 'This is the body of comment 1',
        postId: post.id,
      },
      {
        title: 'Comment 2',
        body: 'This is the body of comment 2',
        postId: post.id,
      },
    ],
  });

  console.log({ post, comments });
}

createMultipleComments()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
async function deleteComment(commentId) {
  const deletedComment = await prisma.comment.delete({
    where: { id: commentId },
  });

  console.log({ deletedComment });
}

deleteComment(1)
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
async function findCommentById(commentId) {
  const comment = await prisma.comment.findUnique({
    where: { id: commentId },
  });

  console.log({ comment });
}

findCommentById(1)
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
async function findCommentWithPost(commentId) {
  const comment = await prisma.comment.findUnique({
    where: { id: commentId },
    include: { post: true },
  });

  console.log({ comment });
}

findCommentWithPost(1)
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
async function findPostWithComments(postId) {
  const post = await prisma.post.findUnique({
    where: { id: postId },
    include: { comments: true },
  });

  console.log({ post });
}

findPostWithComments(1)
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
async function updateComment(commentId, newTitle, newBody) {
  const updatedComment = await prisma.comment.update({
    where: { id: commentId },
    data: {
      title: newTitle,
      body: newBody,
    },
  });

  console.log({ updatedComment });
}

updateComment(1, 'Updated Title', 'Updated Body')
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
