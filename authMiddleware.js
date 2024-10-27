const authMiddleware = (req, res, next) => {
  const user = req.cookies.user ? JSON.parse(req.cookies.user) : null;

  if (user && user.email && user.username && user.role) {
    req.user = user; // Записываем объект user в локальную переменную запроса
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

module.exports = authMiddleware;
