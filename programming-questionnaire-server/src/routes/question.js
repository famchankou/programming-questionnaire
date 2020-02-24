import { Router } from 'express';
import { checkToken } from '../middlewares';
import { QuestionController } from '../controllers';

const router = Router();

router.post('/', checkToken, QuestionController.create);
router.put('/:questionId', checkToken, QuestionController.update);
router.delete('/:questionId', checkToken, QuestionController.delete);
router.get('/:questionId', checkToken, QuestionController.get);
router.get('/quest/:questId', checkToken, QuestionController.getAll);

export default router;
