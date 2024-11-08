const jwt = require('jsonwebtoken');
const userService = require('../services/userService');

const SECRET_KEY = 'your_secret_key'; // Замените на ваш секретный ключ

const authLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await userService.login(email, password);

  if (user) {
    const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, SECRET_KEY, { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true });
    res.status(200).json(user);
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

const authRegistration = async (req, res) => {
  const { username, email, password } = req.body;
  const result = await userService.register(username, email, password);

  if (result === 'User exists') {
    res.status(409).json({ message: 'User already exists' });
  } else {
    const token = jwt.sign({ id: result.id, email: result.email, role: result.role }, SECRET_KEY, { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true });
    res.status(201).json(result);
  }
};

module.exports = {
  authLogin,
  authRegistration,
};
