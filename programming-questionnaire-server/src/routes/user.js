import { Router } from 'express';
import { checkToken } from '../middlewares';
import { UserController } from '../controllers';

const router = Router();

router.post('/', UserController.create);
router.put('/:id', checkToken, UserController.update);
router.delete('/:id', checkToken, UserController.delete);
router.get('/:id', checkToken, UserController.get);

export default router;
