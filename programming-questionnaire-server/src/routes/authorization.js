import { Router } from 'express';
import { AuthorizationController } from '../controllers';

const router = Router();

/**
 * Route serving user authorization
 * 
 * @name post/
 * @memberof module:routers/authorization~authorizationsRouter
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 * @param {callback} middleware - Express middleware
 */
router.post('/', AuthorizationController.auth);

export default router;