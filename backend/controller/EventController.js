import { Events, RegisterEvents } from "../model/EventSchema.js";

// This function is creating new event and this function will be visible on dashboard of organizer so that the organizer can create new event.
export const createEvent = async (req, res) => {
    try {

        const data = req.body
        const event = await new Events(data)
        event.save()
        res.status(201).json(event)
    } catch (error) {
        res.status(400).json(error)
    }
}

// This function is for normal user to register for a event.
export const registerEvent = async (req, res) => {
    try {
        const { ...data } = req.body;
        const register = await RegisterEvents.create(data)
        register.save()
        res.status(200).json(register)
    } catch (error) {
        res.status(400).json(error)
    }
}

// This function displays all the events for the user on website.
export const allEvents = async (req, res) => {
    try {
        const event = await Events.find()
        res.status(200).json(event)
    } catch (error) {
        res.status(400).json(error)
    }
}

// This function is used to display a single event on the page. (show a seperate page for a particular event)
export const eventById = async (req, res) => {
    try {
        const id = req.params.id;
        const event = await Events.find({ _id: id })
        res.status(200).json(event)
    } catch (error) {
        res.status(400).json(error)
    }
}


export const registeredEventsById = async (req, res) => {
    try {
        const id = req.params.id
        const registeredEvents = await RegisterEvents.find({ organizer: id })
        res.status(200).json(registeredEvents)
    } catch (error) {
        res.status(400).json(error)
    }
}

export const eventsByOrganizerId = async (req, res) => {
    try {
        const id = req.params.id
        const events = await Events.find({ organizer: id })
        res.status(200).json(events)
    } catch (error) {
        res.status(400).json(error)

    }
}