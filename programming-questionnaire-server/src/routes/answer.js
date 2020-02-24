import { Router } from 'express';
import { checkToken } from '../middlewares';
import { AnswerController } from '../controllers';

const router = Router();

router.post('/', checkToken, AnswerController.create);
router.put('/:answerId', checkToken, AnswerController.update);
router.delete('/:answerId', checkToken, AnswerController.delete);
router.get('/:answerId', checkToken, AnswerController.get);
router.get('/question/:questionId', checkToken, AnswerController.getAll);

export default router;
