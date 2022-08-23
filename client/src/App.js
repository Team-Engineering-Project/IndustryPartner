
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';
import Login from './components/Login';
import StartComponent from './components/StartComponent';
import Main from './components/Main';

function App() {

  const [user, setUser] = useState({})

  return (
    <>
      {/* <Router>
        <Routes>
          <Route path="/" element={
            user && user._id ? <Main user={user} setUser={setUser} />
              :
              <StartComponent setUser={setUser} />
          } />
          <Route path="/login" element={<StartComponent setUser={setUser} />} />
          <Route path="/main" element={<Main />} />
          
        </Routes>
      </Router> */}

      <Main />
    </>
  );
}

export default App;
