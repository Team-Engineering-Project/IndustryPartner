import Main from './components/TalentSpotlight/Main';
import './App.css';
import React from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import ViewProfile from './components/ViewProfilePage/ViewProfile'


function App() {
  return (
    <>
      {<Header />}
      {/* {<Main />} */}
      <ViewProfile />
      <Footer />
    </>
  );
}

export default App;


