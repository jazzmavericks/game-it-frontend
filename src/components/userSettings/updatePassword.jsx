import { useState } from "react";
import { readCookie } from "../../utils/utilities";
import '../../components/registerForm';

function UpdatePassword(props) {
  const [newPassword, setNewPassword] = useState('');

  async function sendUpdatePasswordToBackend(email, password, newPassword, setLoggedIn) {
    try {
      const jwtToken = readCookie("jwt_token"); // Move this line here
      console.log(email);
      console.log(newPassword);
      console.log('Current password:', password);
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/chPassword`, {
          method: "PUT",
          headers: { 
            "Content-Type": "application/json",
            "Authorization": jwtToken ? `Bearer ${jwtToken}` : '',  // Use jwtToken only when available
          },
          body: JSON.stringify({
            email: email,
            password: password,
            newPassword: newPassword,
          }),
        }
      );

      const data = await response.json();
      console.log(data);

      setLoggedIn(true);
    } catch (error) {
      console.error("Error updating password:", error.message);
    }
  }

  function handleNewPasswordChange(event) {
    // Update the new password value in the parent component
    setNewPassword(event.target.value);
  }

  function handleCurrentPasswordChange(event) {
    // Update the current password value in the parent component
    props.setPassword(event.target.value);
  
    // Log the updated password immediately after setting it
    console.log('Updated password:', event.target.value);
  }

  function handleSubmit(event) {
    console.log('Password changed')
    event.preventDefault(); // Prevent the default form submission
    console.log(props);
    sendUpdatePasswordToBackend(props.email, props.password, newPassword, props.setLoggedIn);
  }

  console.log(props.password);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          id="currentPassword"
          placeholder="Enter your current password"
          required
          value={props.password}
          onChange={handleCurrentPasswordChange}
        />
        <input
          className="passwordbox"
          type="password"
          id="password"
          placeholder="Enter your new password"
          required
          onChange={handleNewPasswordChange} 
        />
        <br />
        <input
          type="submit"
          value="Change Password"
        />
      </form>
    </div>
  );
}

export default UpdatePassword;
