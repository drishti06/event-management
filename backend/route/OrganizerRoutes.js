import express from "express"
import { allEventsByOrgainzerId, allRegisteredEvents, createOrganizer, loginOrganizer, registeredUserByOrganizer } from "../controller/OrganizerController.js"

const router = express.Router();

router
    .post('/new-organizer', createOrganizer)
    .post('/login-organizer', loginOrganizer)
    .post('/register-users', registeredUserByOrganizer)
    .post('/events-by-orgainzer', allEventsByOrgainzerId)
    .get('/', allRegisteredEvents)

export default router