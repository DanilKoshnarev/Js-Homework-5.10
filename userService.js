const userRepository = require('../repositories/userRepository');
const bcrypt = require('bcrypt');

const register = async (username, email, password) => {
  const existingUser = await userRepository.findUserByEmail(email);

  if (existingUser) {
    return { status: 'error', message: 'User exists' };
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    username,
    email,
    password: hashedPassword,
    role: 'user',
  };

  const createdUser = await userRepository.createUser(newUser);
  const { password: _, ...userWithoutPassword } = createdUser;
  return { status: 'ok', user: userWithoutPassword };
};

module.exports = {
  register,
};
