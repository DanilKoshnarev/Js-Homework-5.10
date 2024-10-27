const userRepository = require('../repositories/userRepository');
const bcrypt = require('bcrypt');

const login = async (email, password) => {
  const user = await userRepository.findUserByEmail(email);

  if (user && await bcrypt.compare(password, user.password)) {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  return null;
};

const register = async (username, email, password) => {
  const existingUser = await userRepository.findUserByEmail(email);

  if (existingUser) {
    return 'User exists';
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
  return userWithoutPassword;
};

module.exports = {
  login,
  register,
};
