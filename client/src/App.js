
import Main from './components/TalentSpotlight/Main/Main';
import './App.css';
import React from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Headline from './components/ProfilePage/Headline/Headline';
import ProfileContainer from './components/ProfilePage/ProfileContainer/ProfileContainer';

function App() {
  return (
    <>
      <Header />
      <Main />
      {/* <ProfileContainer /> */}
      <Footer />
    </>
  );
}

export default App;


