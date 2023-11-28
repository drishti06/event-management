import React, { useEffect } from 'react'
import "./Navbar.css"
import { Navigate } from 'react-router-dom'

const Navbar = () => {
    const id = localStorage.getItem('loggedIn')
    const handleLogout = () => {
        localStorage.removeItem('loggedIn')
    }

    useEffect(() => {
        if (!id) {
            <Navigate to='/'></Navigate>
        }
    }, [id])

    return (
        <div className='navbar'>
            <div className='logo'>Logo</div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Navbar