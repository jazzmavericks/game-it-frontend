import DeleteAccount from "../components/userSettings/deleteAccount";
import UpdatePassword from "../components/userSettings/updatePassword";
import UpdateUser from "../components/userSettings/updateUser";
import React, { useState } from 'react';
import Modal from 'react-modal';
import '../components/navbar.css';

function UserSettings(props) {
    console.log(props);
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(true);
    const [registered, setRegistered] = useState("");

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => {setModalIsOpen(true);};
    const closeModal = () => {setModalIsOpen(false);};

    return (
        <div>
            <button className="settings-button" onClick={openModal}>
                <div className="settings-icon">&#9881;</div>
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="User Settings Modal"
            >
                <div className="modal">
                <h4>User Settings</h4>
                <UpdateUser 
                    closeModal={closeModal}
                    email={props.email} setEmail={props.setEmail}
                    loggedIn={loggedIn} setLoggedIn={setLoggedIn} 
                />
                <br />
                <UpdatePassword 
                    closeModal={closeModal} 
                    email={props.email} setEmail={props.setEmail}
                    password={password} setPassword={setPassword}
                    loggedIn={loggedIn} setLoggedIn={setLoggedIn}
                />
                <br />
                <DeleteAccount 
                    closeModal={closeModal} 
                    email={props.email} setEmail={props.setEmail}
                    loggedIn={loggedIn} setLoggedIn={setLoggedIn}
                    registered={registered} setRegistered={setRegistered}
                />
                </div>
            </Modal>
        </div>
    )
};

export default UserSettings;