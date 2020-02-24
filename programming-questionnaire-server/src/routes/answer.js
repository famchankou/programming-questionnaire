import { Router } from 'express';
import { checkToken } from '../middlewares';
import { AnswerController } from '../controllers';

const router = Router();

/**
 * Route serving answer creation
 * 
 * @name post/
 * @memberof module:routers/answer~answeresRouter
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 * @param {callback} middleware - Express middleware
 */
router.post('/', checkToken, AnswerController.create);

/**
 * Route serving answer update
 * 
 * @name post/:answerId
 * @memberof module:routers/answer~answeresRouter
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 * @param {callback} middleware - Express middleware
 */
router.put('/:answerId', checkToken, AnswerController.update);

/**
 * Route serving answer removal
 * 
 * @name delete/:answerId
 * @memberof module:routers/answer~answeresRouter
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 * @param {callback} middleware - Express middleware
 */
router.delete('/:answerId', checkToken, AnswerController.delete);

/**
 * Route serving answer retrieval
 * 
 * @name get/:answerId
 * @memberof module:routers/answer~answeresRouter
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 * @param {callback} middleware - Express middleware
 */
router.get('/:answerId', checkToken, AnswerController.get);

/**
 * Route serving answers retrieval for a specific question by Question ID
 * 
 * @name get/question/:questionId
 * @memberof module:routers/answer~answeresRouter
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 * @param {callback} middleware - Express middleware
 */
router.get('/question/:questionId', checkToken, AnswerController.getAll);

export default router;
