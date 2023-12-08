// Importing necessary modules, assets, and components
import { writecookie } from "../utils/utilities";
import instaLogo from '../images/insta_logo_white.png';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import '../pages/register.css';

// Creating a functional component named RegisterForm
function RegisterForm(props) {
    // Initializing state variables using the useState hook
    const [password, setPassword] = useState('');
    
    // Using the useNavigate hook from react-router-dom
    const navigate = useNavigate();

    // Function to send registration data to the backend
    async function sendRegisterToBackEnd(email, password, setLoggedIn, setRegistered) {
        try {
            // Sending a POST request with registration data
            const response = await fetch(
                "http://localhost:5001/register",
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

            // Setting loggedIn and registered states
            setLoggedIn(false);
            setRegistered(true);

            // Navigating to the "/main" route
            navigate("/main");
        } catch (error) {
            console.error('Error during registration:', error.message);
        }
    }

    // Function to handle form submission
    function handleSubmit(event) {
        console.log(handleSubmit);
        console.log('Form Submitted!');
        event.preventDefault();
        // Calling sendRegisterToBackEnd with necessary props
        sendRegisterToBackEnd(props.email, password, props.setLoggedIn, props.setRegistered);
    }

    // Rendering the RegisterForm component
    return (
        <div className="forms-container">
            <div className="register-section">
                <img />
                <h7>game it</h7>
                <br></br><br></br>
                <p1>Sign up to view games library</p1>
                <br></br><br></br>
                {/* Form for user registration */}
                <form onSubmit={handleSubmit}>
                    {/* Input field for email */}
                    <input
                        className="emailbox"
                        type="text"
                        id="email"
                        placeholder="Phone number, username or email address"
                        required
                        onChange={(event) => props.setEmail(event.target.value)}
                    ></input>
                    {/* Input field for password */}
                    <input
                        className="passwordbox"
                        type="password" // Changed to password type for password fields
                        id="password"
                        placeholder="Password"
                        required
                        onChange={(event) => setPassword(event.target.value)}
                    ></input>
                    <br />
                    {/* Additional text for information */}
                    <p2>By signing up, you agree to our Terms. Learn how we collect, use and share your data in our Privacy Policy and how we use cookies and similar technology in our Cookies Policy.</p2>
                    {/* Submit button for registration */}
                    <br></br><br></br>
                    <input type="submit" value="Next" />
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;
