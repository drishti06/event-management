import mongoose from "mongoose";
import { Schema } from "mongoose";

const organizerSchema = Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

export const Organizer = mongoose.model("organizer", organizerSchema);

