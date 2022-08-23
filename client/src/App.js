import Main from './components/TalentSpotlight/Main/Main';
import './App.css';
import React from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
//import ProfileContainer from './components/ProfilePage/ProfileContainer/ProfileContainer';
//import StartComponent from './components/StartComponent';
import Login from './components/Login';
import Login2 from './components/Login2';
import ProfileView2 from './components/ProfileView2'


function App() {
  return (
    <>
      {<Header />}
      {/* {<Main />} */}
      {/* <ProfileContainer /> */}
      {/* <Login/> */}
      <ProfileView2 />
      {/* <Login2></Login2> */}
      {/* <StartComponent /> */}
      <Footer />

    </>
  );
}

export default App;


