import axios, { all } from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, Link } from 'react-router-dom'

const EventsList = () => {
    const [eventList, setEventList] = useState([])
    const id = localStorage.getItem('loggedIn')
    const allEvents = async (req, res) => {
        const list = await axios.get("https://event-management-backend-chi.vercel.app/events")
        setEventList(list.data)
    }
    //     const organizerName = async () =>{ await axios.post("https://event-management-backend-chi.vercel.app/organizers/")
    // }
    useEffect(() => {
        allEvents()
    }, [id])
    return (
        <div>
            {!id && <Navigate to='/' replace={true}></Navigate>}
            {
                eventList.map((event, index) => {
                    return (
                        <div key={index}>
                            <span>
                                Event Name:
                                {event.name}
                            </span>
                            <span>
                                {event.organizer}
                            </span>
                        </div>
                    )
                })}
            <div>
                <Link to='/userEvents' >Your Registered Events</Link>
            </div>
        </div>
    )
}

export default EventsList