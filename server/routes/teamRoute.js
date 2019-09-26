import express from 'express';
import TeamController from '../controllers/teamController';
import Validate from '../middlewares/Validate';
import authenticate from '../middlewares/authentication';


const router = express.Router();

router.post('/add', authenticate, Validate.admin, TeamController.addTeam);
router.delete('/delete/:id', authenticate, Validate.admin, TeamController.removeTeam);
router.put('/update/:id', authenticate, Validate.admin, TeamController.updateTeam);
router.get('/view', authenticate, Validate.admin, TeamController.viewTeams);

export default router;
