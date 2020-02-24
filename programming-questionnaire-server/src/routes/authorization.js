import { Router } from 'express';
import { AuthorizationController } from '../controllers';

const router = Router();

router.post('/', AuthorizationController.auth);

export default router;