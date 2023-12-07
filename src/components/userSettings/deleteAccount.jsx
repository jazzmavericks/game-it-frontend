import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../pages/main.css';

function DeleteAccount(props) {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  async function sendDeleteAccountToBackend(email, setLoggedIn, setRegistered) {
    try {
      const response = await fetch(
        "http://localhost:5001/deleteAccount",
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email,
          }),
        }
      );

      // Check if the response status is OK before continuing
      if (response.ok) {
        document.cookie = "jwt_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
        window.location.href = window.location.origin;
      } else {
        console.error("Failed to delete account:", response.status);
      }

      const data = await response.json();
      console.log(data);

      setLoggedIn(false);
      setRegistered(false);
    } catch (error) {
      console.error(error);
    }
  }

  function handleDeleteConfirmation() {
    setShowModal(false);
    sendDeleteAccountToBackend(props.email, props.setLoggedIn, props.setRegistered);
  }

  function handleShowModal() {
    setShowModal(true);
  }

  function handleCancelDelete() {
    setShowModal(false);
  }

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <button type="button" onClick={handleShowModal}>
          Delete account
        </button>
      </form>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h4>Are you sure you want to delete your account?</h4>
            <button onClick={handleDeleteConfirmation}>Yes</button>
            <button onClick={handleCancelDelete}>No</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DeleteAccount;