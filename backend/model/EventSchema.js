import mongoose from "mongoose";
import { Schema } from "mongoose";

const eventSchema = Schema({
    name: {
        type: String,
        required: true
    },
    limit: {
        type: Number,
    },
    organizer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "organizers",
        required: true
    },
    deadline: {
        type: Date,
        required: true
    }
});

const registerEvent = Schema({
    firstname: {
        type: String,

    },
    lastname: {
        type: String,

    },
    contactnumber: {
        type: Number,
    },
    city: {
        type: String,
    },
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "events"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    organizer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Organizer',
    }
})
export const Events = mongoose.model("events", eventSchema);

export const RegisterEvents = mongoose.model("registerEvents", registerEvent)