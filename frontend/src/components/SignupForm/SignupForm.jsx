import React, { useState } from 'react'
import axios from "axios"
import { Link, Navigate } from "react-router-dom";

const SignupForm = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [user, setUser] = useState('')
    const [userType, setUserType] = useState('user')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const apiEndpoint =
            userType === 'user'
                ? 'http://localhost:8080/users/new-user'
                : 'http://localhost:8080/organizers/new-organizer';

        const response = await axios.post(apiEndpoint, {
            username,
            email,
            password,

        });
        localStorage.setItem("loggedIn", `${response.data._id}`)
        setUser(response.data.username)
    }

    return (
        <div>
            {user && <Navigate to='/dashboard' replace={true}></Navigate>}
            <form noValidate onSubmit={handleSubmit}>
                <span>SignUp Form</span>
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
                    <label>Username</label>
                    <input type="text"
                        name="username"
                        placeholder='Enter Username'
                        onChange={(e) => setUsername(e.target.value)}
                    />
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
                    <label>Confirm Password</label>
                    <input type="text"
                        name="confirmPassword"
                        placeholder='Enter confirm password'
                    />
                </div>
                <div className="field">
                    <button>SignUp</button>
                </div>
                <div className="field">
                    <span>ALready Have account ?</span>
                    <Link to='/login'>Login</Link>
                </div>
            </form>
        </div>
    )
}

export default SignupForm