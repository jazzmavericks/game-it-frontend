import { readcookie } from "../../utils/utilities";

function UpdatePassword(props){
    async function sendUpdatePasswordToBackend(email, password, newPassword, setLoggedIn) {
        try {
            console.log(email)
            const response = await fetch(
                "http://localhost:5001/chPassword", {
                    method: "PUT",
                    headers: {"Content-Type" : "application/json"},
                    body: JSON.stringify({
                        email: findUser,
                        password: password,
                        newPassword: password
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
        sendUpdatePasswordToBackend(props.email, props.password, props.newPassword, props.setLoggedIn)
    }
    console.log(props.password)

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    className="passwordbox" 
                    type="text" 
                    id="password" 
                    placeholder="Password"
                    required 
                    onChange = {(event) => props.newPassword(event.target.value)}>
                </input>
                <br />
                <input
                    type="submit" 
                    value="change password">
                </input>
            </form>
        </div>
    )
};

export default UpdatePassword;