import { Router } from 'express';
import { checkToken } from '../middlewares';
import { QuestionnaireController } from '../controllers';

const router = Router();

router.post('/', checkToken, QuestionnaireController.create);
router.put('/:questId', checkToken, QuestionnaireController.update);
router.delete('/:questId', checkToken, QuestionnaireController.delete);
router.get('/:questId', checkToken, QuestionnaireController.get);
router.get('/all/questionnaires', checkToken, QuestionnaireController.getAll);

export default router;
