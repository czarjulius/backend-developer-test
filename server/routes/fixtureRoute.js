import express from 'express';
import FixtureController from '../controllers/fixtureController';
import Validate from '../middlewares/Validate';
import authenticate from '../middlewares/authentication';


const router = express.Router();

router.post('/add', authenticate, Validate.admin, FixtureController.addFixture);
router.delete('/delete/:id', authenticate, Validate.admin, FixtureController.removeFixture);
router.put('/update/:id', authenticate, Validate.admin, FixtureController.updateFixture);
router.get('/view', authenticate, Validate.admin, FixtureController.viewFixtures);
router.get('/completed', authenticate, FixtureController.getCompletedFixtures);
router.get('/pending', authenticate, FixtureController.getPendingFixtures);

export default router;
