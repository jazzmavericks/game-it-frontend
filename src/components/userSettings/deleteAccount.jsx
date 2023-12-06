import { useNavigate } from 'react-router-dom';

function DeleteAccount(props){

    const navigate = useNavigate();

    async function sendDeleteAccountToBackend(email, setLoggedIn, setRegistered) {
        try {
            console.log(email)
            const response = await fetch(
                "http://localhost:5001/deleteAccount", {
                    method: "PUT",
                    headers: {"Content-Type" : "application/json"},
                    body: JSON.stringify({
                        email: email
                    })
                }
            )
            const data = await response.json();
            console.log(data);
            document.cookie = "jwt_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
            setLoggedIn(false);
            setRegistered(false);
            navigate("/login");
        } catch (error) {
            console.log(error)
        }
    }

    function handleSubmit(event) {
        sendDeleteAccountToBackend(props.email, props.password, props.newPassword, props.setLoggedIn)
    }
    console.log(props.email)

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="submit" 
                    value="delete account">
                </input>
            </form>
        </div>
    )
};

export default DeleteAccount;