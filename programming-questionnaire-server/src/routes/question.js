import { Router } from 'express';
import { checkToken } from '../middlewares';
import { QuestionController } from '../controllers';

const router = Router();

/**
 * Route serving question creation
 * 
 * @name post/
 * @memberof module:routers/question~questionsRouter
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 * @param {callback} middleware - Express middleware
 */
router.post('/', checkToken, QuestionController.create);

/**
 * Route serving question update
 * 
 * @name put/:questionId
 * @memberof module:routers/question~questionsRouter
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 * @param {callback} middleware - Express middleware
 */
router.put('/:questionId', checkToken, QuestionController.update);

/**
 * Route serving question removal
 * 
 * @name delete/:questionId
 * @memberof module:routers/question~questionsRouter
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 * @param {callback} middleware - Express middleware
 */
router.delete('/:questionId', checkToken, QuestionController.delete);

/**
 * Route serving question retrieval
 * 
 * @name get/:questionId
 * @memberof module:routers/question~questionsRouter
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 * @param {callback} middleware - Express middleware
 */
router.get('/:questionId', checkToken, QuestionController.get);

/**
 * Route serving questions retrieval by Questionnaire ID (All questions relevant to a Questionnaire)
 * 
 * @name get/quest/:questId
 * @memberof module:routers/question~questionsRouter
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 * @param {callback} middleware - Express middleware
 */
router.get('/quest/:questId', checkToken, QuestionController.getAll);

export default router;
