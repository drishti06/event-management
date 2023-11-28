import { Events, RegisterEvents } from "../model/EventSchema.js";
import { Organizer } from "../model/OrganizerSchema.js"

export const createOrganizer = async (req, res) => {
    try {
        const user = await Organizer.create(req.body)
        res.status(201).json(user)
    } catch (error) {
        res.status(400).json(error)
    }
}



// This function shows the list of all the users for the particular organzier.
export const registeredUserByOrganizer = async (req, res) => {
    try {
        const id = req.body
        const findAllEvents = await RegisterEvents.find({ organizer: id })
        res.status(200).json(findAllEvents)
    } catch (error) {
        res.status(400).json(error)
    }
}

// This function displays all the events by a particular organizer id. (events list)
export const allEventsByOrgainzerId = async (req, res) => {
    const id = req.body
    console.log(id)
    try {
        const event = await Events.find({ organizer: id })
        res.status(200).json(event)
    } catch (error) {
        res.status(400).json(error)
    }
}

export const allRegisteredEvents = async (req, res) => {
    try {
        const allEvents = await RegisterEvents.find()
        res.status(200).json(allEvents)
    } catch (error) {
        res.status(400).json(error)
    }
}

export const OrganizerName = async (req, res) => {
    try {
        const id = req.params.id
        const organizerName = await User.findOne({ _id: id })
        res.status(200).json(organizerName.name)
    } catch (error) {

    }
}

export const loginOrganizer = async (req, res) => {
    try {
        const { email, password } = req.body
        const loginOrganizer = await Organizer.findOne({ email: email })
        if (loginOrganizer) {
            if (password == loginOrganizer.password) {
                res.status(200).json(loginOrganizer)
            }
            else {
                res.status(400).json({ msg: "wrong credentials" })
            }
        }
        else {
            res.status(400).json({ msg: "organizer not found" })
        }
    } catch (error) {
        res.status(400).json(error)
    }
}
