const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const findUserByEmail = async (email) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  return user || 'Not Found';
};

const createUser = async (userData) => {
  const user = await prisma.user.create({
    data: userData,
  });

  return user;
};

module.exports = {
  findUserByEmail,
  createUser,
};
