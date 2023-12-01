// Importing necessary modules, components, and assets
import { writecookie } from "../utils/utilities";
import instaLogo from '../images/insta_logo_white.png';
import loginImage from '../images/loginScreenImage.jpg';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../pages/login.css';
import { useState } from "react";

// Creating a functional component named LoginForm
function LoginForm(props) {
    // Using the useState hook to manage the password state
    const [password, setPassword] = useState();

    // Using the useNavigate hook from react-router-dom
    const navigate = useNavigate();

    // Function to send login data to the backend for authentication
    async function sendLoginToBackEnd(email, password, setLoggedIn, setRegistered) {
        try {
            const response = await fetch(
                "https://game-it-backend.onrender.com/loginUser",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        email: email,
                        password: password
                    })
                }
            );

            // Parsing the response into JSON format
            const data = await response.json();
            console.log(data.token);

            // Writing a JWT token to a cookie with a 7-day expiry
            writecookie("jwt_token", data.token, 7);

            // Setting loggedIn and registered states to true
            setLoggedIn(true);
            setRegistered(true);

            // Navigating to the "/main" route
            navigate("/main");
        } catch (error) {
            console.log(error);
        }
    }

    // Function to handle form submission
    function handleSubmit(event) {
        event.preventDefault();
        // Calling the sendLoginToBackEnd function with necessary props
        sendLoginToBackEnd(props.email, password, props.setLoggedIn, props.setRegistered);
    }

    // Rendering the LoginForm component
    return (
        <div className="forms-container">
            <div className="loginPicture">
                <img className="loginImage" src={loginImage} alt="Login Image" />
            </div>
            <div className="login-section">
                <img className="logoWhite" src={instaLogo} alt="Instagram Logo" />
                {/* Form for user login */}
                <form onSubmit={handleSubmit}>
                    {/* Input field for email */}
                    <input
                        className="emailbox"
                        type="text"
                        id="email"
                        placeholder="Phone number, username, or email address"
                        required
                        onChange={(event) => props.setEmail(event.target.value)}
                    ></input>
                    <br></br>
                    {/* Input field for password */}
                    <input
                        className="passwordbox"
                        type="password" // Changed to password type for password fields
                        id="password"
                        placeholder="Password"
                        required
                        onChange={(event) => setPassword(event.target.value)}
                    ></input>
                    <br></br>
                    {/* Link to registration page */}
                    Don't have an account? <Link className="registerLink" to="/register">Register here.</Link>
                    {/* Submit button for login */}
                    <input type="submit" value="Log in" />
                </form>
            </div>
        </div>
    )
};

// Exporting the LoginForm component as the default export
export default LoginForm;
