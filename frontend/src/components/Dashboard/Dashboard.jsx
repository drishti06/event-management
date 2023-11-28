import axios, { all } from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

const Dashboard = () => {
    const [events, setEvents] = useState([])
    const [eventById, setEventById] = useState([])
    const id = localStorage.getItem("loggedIn")
    const [displaySection, setDisplaySection] = useState('eventById');


    const allEvents = async () => {
        try {
            const response = await axios.post(`http://localhost:8080/events/registered-events/${id}`)
            setEvents(response.data)
            // console.log(response.data)
            const event = await axios.post(`http://localhost:8080/events/organizer-events/${id}`)
            setEventById(event.data)
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        allEvents()
        if (!id) {
            <Navigate to='/'></Navigate>
        }
    }, [id])

    return (

        <div>
            {!id && <Navigate to='/' replace={true}></Navigate>}
            <div>
                <button onClick={() => setDisplaySection('eventById')}>All Events</button>
                <button onClick={() => setDisplaySection('events')}>Registered User</button>
            </div>

            {displaySection === 'events' && (
                <div>
                    {
                        events.map((event, index) => {
                            return (
                                <div key={index} style={{ display: "flex", flexDirection: "column" }}>
                                    <span>{index + 1}.</span>
                                    <span>{event.firstname}</span>
                                    <span>{event.lastname}</span>
                                    <span>{event.city}</span>
                                    <span>{event.contactnumber}</span>

                                </div>
                            )
                        })
                    }</div>
            )}
            {displaySection === 'eventById' && (
                <div>
                    {
                        eventById.map((event, index) => {
                            return (
                                <div key={index} style={{ display: "flex", flexDirection: "column" }}>
                                    <span>{event.name}</span>
                                    <span>{event.deadline}</span>
                                    <span>{event.limit}</span>
                                    <span></span>
                                    <span></span>
                                </div>
                            )
                        })
                    }</div>
            )}
        </div>
    )
}

export default Dashboard