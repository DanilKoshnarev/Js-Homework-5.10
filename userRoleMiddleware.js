const express = require('express');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const authMiddleware = require('./middlewares/authMiddleware');
const userRoleMiddleware = require('./middlewares/userRoleMiddleware');

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/auth', authRoutes);
app.use('/post', authMiddleware, userRoleMiddleware, postRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
