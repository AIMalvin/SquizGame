
import express, { Router } from 'express';
import UserController from './controllers/UserController';

const router: Router = express.Router();

router.post('/signup', UserController.signup);

export default router;
