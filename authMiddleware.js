const jwt = require('jsonwebtoken');
const SECRET_KEY = 'your_secret_key'; // Замените на ваш секретный ключ

const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded; 
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};

module.exports = authMiddleware;
