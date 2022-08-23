import Main from './components/TalentSpotlight/Main/Main';
import './App.css';
import React from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import ProfileContainer from './components/ProfilePage/ProfileContainer/ProfileContainer';
import StartComponent from './components/StartComponent';
import Login from './components/Login';


function App() {
  return (
    <>
      {<Header />}
      {/* {<Main />} */}
      <ProfileContainer />
      {/* <Login/> */}
      {/* <StartComponent /> */}
      <Footer />

    </>
  );
}

export default App;


