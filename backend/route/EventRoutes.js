import express from 'express';
import { allEvents, createEvent, eventById, eventsByOrganizerId, registerEvent, registeredEventsById, } from '../controller/EventController.js';
const router = express.Router();

router
    .post('/new-event', createEvent)
    .post('/register-event', registerEvent)
    .post('/event-by-id/:id', eventById)
    .post('/registered-events/:id', registeredEventsById)
    .post('/organizer-events/:id', eventsByOrganizerId)
    .get('/', allEvents)


export default router;