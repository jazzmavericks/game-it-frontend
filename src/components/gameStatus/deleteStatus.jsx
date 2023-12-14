import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../pages/myGames.css';

function DeleteStatus(props) {
  const navigate = useNavigate();

  async function sendDeleteStatusToBackend(email, gameID, setLoggedIn, setRegistered) {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/deleteGame`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email,
            gameID: gameID,
          }),
        }
      );

      const data = await response.json();
      console.log(data);

      setLoggedIn(true);
      setRegistered(true);

    } catch (error) {
        console.error("Error deleting game:", error);
    }
  }

  const handleDelete = () => {
    sendDeleteStatusToBackend(props.email, props.gameID, props.setLoggedIn, props.setRegistered);
  }

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <button type="button" onClick={handleDelete}>
          Remove
        </button>
      </form>
    </div>
  );
}

export default DeleteStatus;
