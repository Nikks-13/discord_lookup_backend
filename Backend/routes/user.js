import express from 'express';
import {fetchUserData} from '../controllers/user.js';

const router = express.Router();

router.get('/:userId', fetchUserData);

export default router;
