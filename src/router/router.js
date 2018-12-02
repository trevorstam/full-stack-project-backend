import express from 'express';
import sendJSON from '../middleware/sendJSON';

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Server Home');
});

router.get('/content', (req, res, next) => {
  sendJSON(res, req.body);
});

export default router;