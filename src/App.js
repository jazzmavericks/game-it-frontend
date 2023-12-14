// Importing necessary modules and components from 'react-router-dom' and local files
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterForm from './components/registerForm';
import LoginForm from './components/LoginForm';
import Footer from './components/footer';
import About from './pages/about';
import Main from './pages/main';
import GamesLibrary from './pages/gamesLibrary';
import MyGames from './pages/MyGames.jsx';
import Navbar from './components/Navbar.jsx';
import GameDetails from './pages/GameDetails.jsx';
import News from './pages/news';


// Main component named App
function App() {
  // State variables for email, login status, and registration status using useState hook
  const [email, setEmail] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [gameID, setGameID] = useState();

  // Rendered JSX for the application
  return (
    <div>
      <BrowserRouter>
      <Navbar loggedIn={loggedIn} email={email} setEmail={setEmail}></Navbar>
      {/* BrowserRouter to manage routing */}
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
          {/* Route for the 'Main' component on the root path */}
          <Route
            exact
            path="/"
            element={<Main
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
          {/* Route for the 'News' component on '/News' path */}
          <Route
            exact
            path="/news"
            element={<News
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
            {/* Route for the 'About' component on '/about' path */}
            <Route
            exact
            path="/about"
            element={<About
              email={email} setEmail={setEmail}
              loggedIn={loggedIn} setLoggedIn={setLoggedIn}
              registered={registered} setRegistered={setRegistered}
            />}
          />
            {/* Route for the 'GamesLibrary' component on '/gamesLibrary' path */}
            <Route
            exact
            path="/gamesLibrary"
            element={<GamesLibrary
              email={email} setEmail={setEmail}
              loggedIn={loggedIn} setLoggedIn={setLoggedIn}
              registered={registered} setRegistered={setRegistered}
              gameID = {gameID} setGameID = {setGameID}
            />}
          />
            {/* Route for the 'GameDetails' component on '/GameDetails' path */}
            <Route
            exact
            path="/GameDetails"
            element={<GameDetails

            />}
            />
              {/* Route for the 'MyGames' component on '/MyGames' path */}
              <Route
                exact
                path="/MyGames"
                element={<MyGames
                email={email} setEmail={setEmail}
                loggedIn={loggedIn} setLoggedIn={setLoggedIn}
                registered={registered} setRegistered={setRegistered}
              />}
              />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

// Exporting the App component
export default App;
