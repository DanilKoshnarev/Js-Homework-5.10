const userRoleMiddleware = (req, res, next) => {
  const { role } = req.user;

  if (role === 'admin') {
    next();
  } else {
    res.status(403).json({ message: 'Forbidden' });
  }
};

module.exports = userRoleMiddleware;
