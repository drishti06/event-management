import { useState } from "react";
import "./RegistrationForm.css";
import axios from "axios";

function RegistrationForm() {
    const eventData = useState([])
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = axios.post("http://localhost:5000/events/register-event", eventData).then((res) => {
            try {
                console.log(res.data)

            } catch (error) {
                console.log(error)
            }
        })
    };
    return (
        <div className="registration">
            <div>

                <span>Registration Form</span>
                <form action="">
                    <div>
                        <span>First Name</span>
                        <input type="text" onChange={handleChange} />
                    </div>
                    <div>
                        <span>Last Name</span>
                        <input type="text" onChange={handleChange} />
                    </div>
                    <div>
                        <span>Email</span>
                        <input type="email" onChange={handleChange} />
                    </div>
                    <div>
                        <span>City</span>
                        <input type="text" onChange={handleChange} />
                    </div>
                    <div>
                        <button onClick={handleSubmit}>
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegistrationForm;
