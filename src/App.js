// Importing necessary modules and components from 'react-router-dom' and local files
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterForm from './components/registerForm';
import LoginForm from './components/LoginForm';
import Navbar from './components/navbar';
import Main from './pages/main';

// Main component named App
function App() {
  // State variables for email, login status, and registration status using useState hook
  const [email, setEmail] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [registered, setRegistered] = useState(false);

  // Rendered JSX for the application
  return (
    <div>
      <Navbar loggedIn={loggedIn} email={email}></Navbar>
      <BrowserRouter>
        <Routes>
          {/* Route for the 'Main' component */}
          <Route
            exact
            path="/main"
            element={<Main
              email={email} setEmail={setEmail}
              loggedIn={loggedIn} setLoggedIn={setLoggedIn}
              registered={registered} setRegistered={setRegistered}
            />}
          />
          {/* Route for the 'LoginForm' component on the root path */}
          <Route
            exact
            path="/"
            element={<LoginForm
              email={email} setEmail={setEmail}
              loggedIn={loggedIn} setLoggedIn={setLoggedIn}
              registered={registered} setRegistered={setRegistered}
            />}
          />
          {/* Route for the 'LoginForm' component on '/login' path */}
          <Route
            exact
            path="/login"
            element={<LoginForm
              email={email} setEmail={setEmail}
              loggedIn={loggedIn} setLoggedIn={setLoggedIn}
              registered={registered} setRegistered={setRegistered}
            />}
          />
          {/* Route for the 'RegisterForm' component on '/register' path */}
          <Route
            exact
            path="/register"
            element={<RegisterForm
              email={email} setEmail={setEmail}
              loggedIn={loggedIn} setLoggedIn={setLoggedIn}
              registered={registered} setRegistered={setRegistered}
            />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// Exporting the App component
export default App;
