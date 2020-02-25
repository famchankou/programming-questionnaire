import { Router } from 'express';
import { AuthorizationController } from '../controllers';

const router = Router();

/**
 * Route serving user authorization
 * 
 * @name post/
 * @memberof module:routers/authorization~authorizationsRouter
 * @param {String} path - Express path
 * @param {Function} middleware - Express middleware
 * @param {Function} middleware - Express middleware
 */
router.post('/', AuthorizationController.auth);

export default router;