const express = require('express');
const app = express();
const postRoutes = require('./routes/posts');

app.use(express.json());
app.use('/', postRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
