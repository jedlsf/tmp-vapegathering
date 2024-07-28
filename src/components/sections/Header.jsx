
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { logoEmblemReQuest } from '../../assets-imported/assets';
import { HomeIcon, SearchIcon, TicketsIcon, WalletIcon, ProfileIcon } from '../../icons';
import NavMenuTab from '../functional/NavMenuTab';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  color: white;
`;

const Logo = styled.img`
  height: 25px;
  z-index: 1;
`;



function Header() {
  return (
    <HeaderContainer>
      <Logo src={logoEmblemReQuest} className="App-logo" alt="logo" />
      <NavMenuTab />
    </HeaderContainer>
  );
}

export default Header;
