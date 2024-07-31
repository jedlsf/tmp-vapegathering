
import './App.css';
import './styles/fonts.css'; // Import fonts.css here
import './styles/cssGlobal.css';
import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, Switch, NavLink } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme'; // Import your theme
import styled from 'styled-components';


//Import AWS Services

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
//import Search from './pages/Search';
//import MyTickets from './pages/MyTickets';
//import MyWallet from './pages/MyWallet';
//import MyProfile from './pages/MyProfile';



//Import Sections
import Header from './components/sections/Header';
import Footer from './components/sections/Footer';
import Sidebar from './components/sections/Sidebar';


import { AppContainer, MainContainer } from './styles/global';
import AgeVerification from './components/functional/AgeVerification';


function App() {

  const [isAbove18, setIsAbove18] = useState(null);

  useEffect(() => {
    const remembered = localStorage.getItem('isAbove18');
    if (remembered) {
      setIsAbove18(true);
    }
  }, []);

  const handleVerify = (isAbove18) => {
    if (isAbove18) {
      setIsAbove18(true);
    } else {
      // Handle the case where the user is not above 18
      // For example, you might redirect them to another page
    }
  };

  if (isAbove18 === null) {
    return (
      <ThemeProvider theme={theme}>
        <AgeVerification onVerify={handleVerify} />
      </ThemeProvider>
    );
  }


  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppContainer>
          <Header />
          <MainContainer>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />

            </Routes>
          </MainContainer>
          <Footer />
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;


