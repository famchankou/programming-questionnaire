import { Router } from 'express';
import { checkToken } from '../middlewares';
import { UserController } from '../controllers';

const router = Router();

router.post('/', UserController.create);
router.put('/:userId', checkToken, UserController.update);
router.delete('/:userId', checkToken, UserController.delete);
router.get('/:userId', checkToken, UserController.get);

export default router;
