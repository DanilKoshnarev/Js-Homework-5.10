
import { Router } from 'express';
import { getAllPosts, getPostById, createPost } from '../controllers/postController';

const router: Router = Router();

router.get('/posts', getAllPosts);
router.get('/post/:id', getPostById);
router.post('/postcreate', createPost);

export default router;
