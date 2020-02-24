import { Router } from 'express';
import { checkToken } from '../middlewares';
import { UserController } from '../controllers';

const router = Router();

/**
 * Route serving user creation
 * 
 * @name post/
 * @memberof module:routers/user~usersRouter
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.post('/', UserController.create);

/**
 * Route serving user update
 * 
 * @name put/:userId
 * @memberof module:routers/user~usersRouter
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 * @param {callback} middleware - Express middleware
 */
router.put('/:userId', checkToken, UserController.update);

/**
 * Route serving user removal
 * 
 * @name delete/:userId
 * @memberof module:routers/user~usersRouter
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 * @param {callback} middleware - Express middleware
 */
router.delete('/:userId', checkToken, UserController.delete);

/**
 * Route serving user retrieval
 * 
 * @name get/:userId
 * @memberof module:routers/user~usersRouter
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 * @param {callback} middleware - Express middleware
 */
router.get('/:userId', checkToken, UserController.get);

export default router;
