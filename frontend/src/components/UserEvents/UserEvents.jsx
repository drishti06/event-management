import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UserEvents = () => {
    const [eventList, setEventList] = useState([]);
    const id = localStorage.getItem('loggedIn');

    const eventsList = async () => {
        try {
            const list = await axios.post(`http://localhost:8080/users/your-events/${id}`);
            const eventsData = list.data.map((event) => ({
                eventName: event.correspondingEvent.name,
                organizerName: event.correspondingOrganizer.username,
            }));

            setEventList(eventsData);

            console.log(list.data);
        } catch (error) {
            console.error('Error fetching user events:', error);
        }
    };

    useEffect(() => {
        eventsList();
    }, []);
    return (
        <div>
            {eventList.map((event, index) => (
                <div key={index}>
                    <span>Event Name: {event.eventName}</span>
                    <span>Organizer Name: {event.organizerName}</span>
                </div>
            ))}
        </div>

    )
}

export default UserEvents