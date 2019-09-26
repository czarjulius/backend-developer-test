import express from 'express';
import userRoute from './userRoute';
import teamRoute from './teamRoute';
import fixtureRoute from './fixtureRoute';

const router = express.Router();

router.use('/user', userRoute);
router.use('/team', teamRoute);
router.use('/fixture', fixtureRoute);

export default router;
