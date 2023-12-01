// Importing a function named readcookie from the "../utils/utilities" module
import { readcookie } from "../utils/utilities";

// Creating a functional component named Listusers
function Listusers(props) {
    // Function to fetch the list of users from the server
    async function getListOfUsers(setUserList, userList) {
        try {
            // Retrieving a JWT token from a cookie using the readcookie function
            const jwt_token = await readcookie("jwt_token");

            // Making a GET request to fetch the list of users
            const response = await fetch(
                "https://game-it-backend.onrender.com/listAllUsers",
                {
                    method: "GET",
                    headers: {
                        "Content-Type" : "application/json",
                        // Setting Authorization header with the retrieved JWT token
                        "Authorization" : `Bearer ${jwt_token}`
                    }
                }
            );

            // Parsing the response into JSON format
            const data = await response.json();

            // Updating the userList state with the received data
            setUserList(data.details);
            console.log(data.details); // Logging the details to the console
        } catch (error) {
            // Handling any errors that occur during the process
        }
    }

    // Function to handle click event for fetching the list of users
    function handleClick(event) {
        // Calling the getListOfUsers function with setUserList and userList props
        getListOfUsers(props.setUserList, props.userList);
    }

    // Function to handle click event for clearing the user list
    function handleOffClick(event) {
        // Clearing the userList state by setting it to an empty array
        props.setUserList([]);
    }

    // Rendering the Listusers component
    return (
        <div class="listAllUsersPart">
            <hr />
            <h2>List all users</h2>
            {/* Button to trigger fetching the list of users */}
            <button onClick={handleClick}>Press for List</button>
            {/* Button to clear the displayed user list */}
            <button onClick={handleOffClick}>Press to hide</button>
            <p>The user list is as follows:</p>
            <br></br>
            {/* Mapping through the userList prop and displaying each user's email */}
            {props.userList && props.userList.map((item, index) => {
                return (
                    <div key={index}>
                        <h3>{item.email}</h3>
                    </div>
                )
            })}
            <hr />
        </div>
    )
};

// Exporting the Listusers component as the default export
export default Listusers;
