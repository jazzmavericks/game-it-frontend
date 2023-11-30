// Importing necessary modules and components
import React, { useEffect, useState } from 'react';
import './register.css';
import RegisterForm from './components/registerForm';

// Creating a functional component named Register
function Register(props) {
    // Using the useState hook to manage the password state
    const [password, setPassword] = useState("");
   
    // Rendering the Register component
    return (
        <div>
            {/* Conditional rendering based on the loggedIn prop */}
            {!props.loggedIn && <div className="forms-container">
                {/* Conditional rendering of the RegisterForm component */}
                {!props.loggedIn && <RegisterForm
                    // Passing props setEmail, email, setPassword, password, and setLoggedIn to the RegisterForm component
                    setEmail={props.setEmail}
                    email={props.email}
                    setPassword={setPassword}
                    password={password} 
                    setLoggedIn={props.setLoggedIn}>
                </RegisterForm>}
            </div>}
        </div>
    )
}

// Exporting the Register component as the default export
export default Register;
