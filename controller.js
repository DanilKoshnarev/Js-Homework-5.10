const userService = require('../services/userService');

const authLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await userService.login(email, password);

  if (user) {
    res.cookie('user', JSON.stringify(user), { httpOnly: true });
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
    res.cookie('user', JSON.stringify(result), { httpOnly: true });
    res.status(201).json(result);
  }
};

module.exports = {
  authLogin,
  authRegistration,
};
