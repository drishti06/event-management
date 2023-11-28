import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard.jsx'
import axios from 'axios'

const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [user, setUser] = useState("")
    const [organizer, setOrganizer] = useState("")
    const [userType, setUserType] = useState('user')

    const handleUserLogin = async (e) => {
        e.preventDefault();
        if (userType === 'user') {
            const response = await axios.post('https://event-management-backend-chi.vercel.app/users/login-user', {
                email,
                password,
            })
            setUser(response.data.username);
            localStorage.setItem("loggedIn", `${response.data._id}`)
        }
        else if (userType === 'organizer') {
            const res = await axios.post('https://event-management-backend-chi.vercel.app/organizers/login-organizer', {
                email, password
            })
            setOrganizer(res.data.username)
        }
    };

    useEffect(() => {
        if (user) {
            <Navigate to='/events'></Navigate>
        }
    }, [])
    return (

        <div>
            {organizer && <Navigate to='/dashboard' replace={true}></Navigate>}
            {user && <Navigate to='/events'></Navigate>}
            <form noValidate onSubmit={handleUserLogin}>
                <span>Login Form</span>
                <div className="field">
                    <label>User Type:</label>
                    <div>
                        <label>
                            <input
                                type="radio"
                                name="userType"
                                value="user"
                                checked={userType === 'user'}
                                onChange={() => setUserType('user')}
                            />
                            User
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="userType"
                                value="organizer"
                                checked={userType === 'organizer'}
                                onChange={() => setUserType('organizer')}
                            />
                            Organizer
                        </label>
                    </div>
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="email"
                        name="email"
                        placeholder='Enter email'
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                </div>
                <div className="field">
                    <label>Password</label>
                    <input type="password"
                        name="password"
                        placeholder='Enter password'
                        onChange={(e) => { setPassword(e.target.value) }}
                    />
                </div>
                <div className="field">
                    <button>Login</button>
                </div>
                <div className="field">
                    <span>Do not Have account ?</span>
                    <Link to='/signup'>Singup</Link>
                </div>
            </form>
        </div>)
}

export default LoginForm