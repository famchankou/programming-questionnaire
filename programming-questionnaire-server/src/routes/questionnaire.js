import { Router } from 'express';
import { checkToken } from '../middlewares';
import { QuestionnaireController } from '../controllers';

const router = Router();

/**
 * Route serving questionnaire creation
 * 
 * @name post/
 * @memberof module:routers/questionnaire~questionnairesRouter
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 * @param {callback} middleware - Express middleware
 */
router.post('/', checkToken, QuestionnaireController.create);

/**
 * Route serving questionnaire update
 * 
 * @name put/:questId
 * @memberof module:routers/questionnaire~questionnairesRouter
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 * @param {callback} middleware - Express middleware
 */
router.put('/:questId', checkToken, QuestionnaireController.update);

/**
 * Route serving questionnaire removal
 * 
 * @name delete/:questId
 * @memberof module:routers/questionnaire~questionnairesRouter
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 * @param {callback} middleware - Express middleware
 */
router.delete('/:questId', checkToken, QuestionnaireController.delete);

/**
 * Route serving questionnaire retrieval
 * 
 * @name get/:questId
 * @memberof module:routers/questionnaire~questionnairesRouter
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 * @param {callback} middleware - Express middleware
 */
router.get('/:questId', checkToken, QuestionnaireController.get);

/**
 * Route serving retrieval of all questionnaires
 * 
 * @name get/all/questionnaires
 * @memberof module:routers/questionnaire~questionnairesRouter
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 * @param {callback} middleware - Express middleware
 */
router.get('/all/questionnaires', checkToken, QuestionnaireController.getAll);

export default router;
