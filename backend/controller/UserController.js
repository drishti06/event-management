import { RegisterEvents, Events } from "../model/EventSchema.js"
import { Organizer } from "../model/OrganizerSchema.js"
import { User } from "../model/UserSchema.js"

export const createUser = async (req, res) => {
    try {
        const { username } = req.body
        const checkUser = await User.findOne({ username: username })
        if (checkUser) {
            res.status(300).json({ msg: "user already exist" })
        } else {
            const user = await User.create(req.body)
            res.status(201).json(user)
        }
    } catch (error) {
        res.status(400).json(error)
    }
}

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const loginUser = await User.findOne({ email: email })
        if (loginUser) {
            if (password == loginUser.password) {
                res.status(200).json(loginUser)
            }
            else {
                res.status(400).json({ msg: "wrong credentials" })
            }
        }
        else {
            res.status(400).json({ msg: "user not found" })
        }
    } catch (error) {
        res.status(400).json(error)
    }
}

export const eventsOfUser = async (req, res) => {
    try {
        const id = req.params.id
        const registeredEvents = await RegisterEvents.find({ user: id })
        const allEvents = await Events.find({});
        const allOrganizer = await Organizer.find({})
        const eventsOfUser = registeredEvents.map((registeredEvent) => {
            const correspondingEvent = allEvents.find((event) => event._id.equals(registeredEvent.event));
            const correspondingOrganizer = allOrganizer.find((organizer) => organizer._id.equals(registeredEvent.organizer))
            console.log(correspondingEvent)
            return { correspondingEvent, correspondingOrganizer }
        });
        res.status(200).json(eventsOfUser)
    } catch (error) {
        res.status(400).json(error)
    }
}