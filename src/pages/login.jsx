// Importing necessary modules and components
import React, { useState } from 'react';
import './login.css';
import LoginForm from './components/loginForm';

// Creating a functional component named Login
function Login(props) {
    // Destructuring props to extract loggedIn value
    const { loggedIn } = props;

    // Using the useState hook to manage password state
    const [password, setPassword] = useState("");

    // Rendering the login component
    return (
        <div className="login">
            {/* Conditional rendering based on loggedIn value */}
            {!loggedIn && 
                <div>
                    {/* Rendering the LoginForm component */}
                    <LoginForm
                        // Passing props setEmail, email, setPassword, password, and setLoggedIn to the LoginForm component
                        setEmail={props.setEmail}
                        email={props.email}
                        setPassword={setPassword}
                        password={password}
                        setLoggedIn={props.setLoggedIn}>  
                    </LoginForm>
                <h1>hello</h1>
                </div>
            }
        </div>
    )
}

// Exporting the Login component as the default export
export default Login;
