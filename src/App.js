
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
//import Search from './pages/Search';
//import MyTickets from './pages/MyTickets';
//import MyWallet from './pages/MyWallet';
//import MyProfile from './pages/MyProfile';



//Import Sections
import Header from './components/sections/Header';
import Footer from './components/sections/Footer';
import Sidebar from './components/sections/Sidebar';


import { AppContainer, MainContainer } from './styles/global';



function App() {



  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppContainer>
          <Header />
          <MainContainer>

            <Routes>
              <Route path="/" element={<Home />} />

            </Routes>
          </MainContainer>
          <Footer />
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;


/*    
                  <Route path="/search" element={<Search />} />
                  <Route path="/my-tickets" element={<MyTickets />} />
                  <Route path="/my-wallet" element={<MyWallet />} />
                  <Route path="/my-profile" element={<MyProfile />} />
                  */

