import Main from './components/TalentSpotlight/Main';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import ViewProfile from './components/ViewProfilePage/ViewProfile'
import Login from './components/Login';
import StartComponent from './components/StartComponent';

function App() {

  const [user, setUser] = useState({})
  

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
    </>
  );
}

export default App;


