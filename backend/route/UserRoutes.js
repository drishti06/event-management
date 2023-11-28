import express from 'express';
import { createUser, eventsOfUser, loginUser } from '../controller/UserController.js';


const router = express.Router();

router
    .post('/new-user', createUser)
    .post('/login-user', loginUser)
    .post('/your-events/:id', eventsOfUser)


export default router;