import { Router } from 'express';
import { checkToken } from '../middlewares';
import { ProgressController } from '../controllers';

const router = Router();

/**
 * Route serving progress creation
 * 
 * @name post/
 * @memberof module:routers/progress~progressesRouter
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 * @param {callback} middleware - Express middleware
 */
router.post('/', checkToken, ProgressController.create);

/**
 * Route serving progress update
 * 
 * @name put/:progressId
 * @memberof module:routers/progress~progressesRouter
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 * @param {callback} middleware - Express middleware
 */
router.put('/:progressId', checkToken, ProgressController.update);

/**
 * Route serving progress removal
 * 
 * @name delete/:progressId
 * @memberof module:routers/progress~progressesRouter
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 * @param {callback} middleware - Express middleware
 */
router.delete('/:progressId', checkToken, ProgressController.delete);

/**
 * Route serving progress retrieval
 * 
 * @name get/:progressId
 * @memberof module:routers/progress~progressesRouter
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 * @param {callback} middleware - Express middleware
 */
router.get('/:progressId', checkToken, ProgressController.get);

/**
 * Route serving progresses retrieval for the specific user by User ID
 * 
 * @name get/user/:userId
 * @memberof module:routers/progress~progressesRouter
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 * @param {callback} middleware - Express middleware
 */
router.get('/user/:userId', checkToken, ProgressController.getAll);

export default router;
