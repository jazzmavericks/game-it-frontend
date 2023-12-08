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
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // Using the useNavigate hook from react-router-dom
    const navigate = useNavigate();

    // Function to send login data to the backend for authentication
    async function sendLoginToBackEnd(email, password, setLoggedIn, setRegistered) {
    console.log('Email:', email);
    console.log('Password:', password);
    try {
        setLoading(true);
        const response = await fetch(
            `${process.env.REACT_APP_BASE_URL}/loginUser`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            }
        );

        console.log('Response Status:', response.status);

        if (response.status === 201) {
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
        } else {
            setError("Invalid username or password. Please try again.");
        }
    } catch (error) {
        console.error('Error logging in:', error.message);
    } finally {
        setLoading(false);
    }
}
    // Function to handle form submission
    function handleSubmit(event) {
        console.log('User logged in!');
        event.preventDefault();
        setError(""); // Reset error message on form submission
        sendLoginToBackEnd(props.email, password, props.setLoggedIn, props.setRegistered);
        // Calling the sendLoginToBackEnd function with necessary props
    }

    // Rendering the LoginForm component
    return (
        <div className="forms-container">
            {/* <div className="loginPicture">
                <img className="loginImage" src={loginImage} alt="Login Image" />
            </div> */}
            <div className="login-section">
                <img  />
                <h7>game it</h7>
                <br></br>
                <br></br>
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
                    {/* Display error message */}
                    {error && <p className="error-message">{error}</p>} 
                    {/* Link to registration page */}
                    Don't have an account?  
                    <Link 
                        className="registerLink" 
                        to="/register" 
                        style={{ color: '#3E92CC'}}
                    > Register here.</Link>
                    {/* Submit button for login */}
                    <input type="submit" value={loading ? "Logging in..." : "Log in"} disabled={loading} />
                </form>
            </div>
        </div>
    )
};

// Exporting the LoginForm component as the default export
export default LoginForm;
