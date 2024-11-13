const jwt = require('jsonwebtoken');
const userService = require('../services/userService');

const SECRET_KEY = 'your_secret_key'; // Замените на ваш секретный ключ

const authRegistration = async (req, res) => {
  const { username, email, password } = req.body;
  const result = await userService.register(username, email, password);

  if (result.status === 'error') {
    res.status(409).json({ message: result.message });
  } else {
    const token = jwt.sign({ id: result.user.id, email: result.user.email, role: result.user.role }, SECRET_KEY, { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true });
    res.status(201).json(result.user);
  }
};

module.exports = {
  authRegistration,
};
