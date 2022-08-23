import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';
import Login from './components/Login';
import StartComponent from './components/StartComponent';
import Main from './components/Main';

function App() {

  const [user, setUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={
            user && user._id ? <Main user={user} setUser={setUser} />
              :
              <Login setUser={setUser} />
          } />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/main" element={<Main />} />

        </Routes>
      </Router>


      {/* <Main /> */}

      {/* <Header />
      <Main /> */}
    </>
  );
}

export default App;
