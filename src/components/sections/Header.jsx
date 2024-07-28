
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { logoVG } from '../../assets-imported/assets';
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
  user-select: none;
`;



function Header() {
  return (
    <HeaderContainer>
      <Logo src={logoVG} className="App-logo" alt="logo" />
      <NavMenuTab />
    </HeaderContainer>
  );
}

export default Header;
