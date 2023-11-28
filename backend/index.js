import express from 'express';
import mongoose from 'mongoose';
import EventRoutes from './route/EventRoutes.js';
import UserRoutes from './route/UserRoutes.js';
import OrganizerRoutes from './route/OrganizerRoutes.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from "dotenv"

const server = express();
server.use(express.json());
server.use(cors({
    origin: "https://event-management-inky.vercel.app/",
    methods: ['GET', 'PUT', 'POST']
}));
server.use(bodyParser.json());
dotenv.config();

main();
async function main() {
    mongoose
        .connect("mongodb+srv://DrishtiKurmavanshi:n5RnUNAtPyh9TeDR@cluster0.gkqcmrh.mongodb.net/EventManagement")
        .then(function () {
            console.log("Connected to MongoDB");
        })
        .catch((err) => {
            console.log(err);
        });
}

server
    .use("/events", EventRoutes)
    .use("/users", UserRoutes)
    .use("/organizers", OrganizerRoutes)

server.listen(process.env.PORT, () => {
    console.log(`Server started at port ${process.env.PORT}`);
});