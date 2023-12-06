import { readcookie } from "../../utils/utilities";

function UpdateUser(props){
    async function sendUpdateUserToBackend(email, setLoggedIn) {
        try {
            console.log(email)
            const response = await fetch(
                "http://localhost:5001/chUsername", {
                    method: "PUT",
                    headers: {"Content-Type" : "application/json"},
                    body: JSON.stringify({
                        email: newUsername
                    })
                }
            )
            const data = await response.json();
            console.log(data);
            readcookie("jwt_token");
            setLoggedIn(true);
        } catch (error) {
            console.log(error)
    }
}
    function handleSubmit(event) {
        sendUpdateUserToBackend(props.email, props.setLoggedIn)
    }
    console.log(props.email)

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    className="emailbox" 
                    type="text" 
                    id="email" 
                    placeholder="Phone number, username, or email"
                    required 
                    onChange = {(event) => props.setEmail(event.target.value)}>
                </input>
                <br />
                <input
                    type="submit" 
                    value="change username">
                </input>
            </form>
        </div>
    )
};

export default UpdateUser;