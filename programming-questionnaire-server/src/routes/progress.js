import { Router } from 'express';
import { checkToken } from '../middlewares';
import { ProgressController } from '../controllers';

const router = Router();

router.post('/', checkToken, ProgressController.create);
router.put('/:progressId', checkToken, ProgressController.update);
router.delete('/:progressId', checkToken, ProgressController.delete);
router.get('/:progressId', checkToken, ProgressController.get);
router.get('/user/:userId', checkToken, ProgressController.getAll);

export default router;
