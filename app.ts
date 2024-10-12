import express, { Application } from 'express';
import postRoutes from './routes/posts';

const app: Application = express();

app.use(express.json());
app.use('/', postRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
