
import React from 'react';
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
  z-index: 150;
 
  @media (max-width: 768px) {
     padding: 0px;
  }
`;

const Logo = styled.img`
  height: 70px;
  z-index: 1;
  user-select: none;
  @media (max-width: 768px) {
    display: none;
  }
`;



function Header() {
  return (
    <HeaderContainer>
      <Logo src={logoVG} className="App-logo" alt="logo" />

    </HeaderContainer>
  );
}

export default Header;

//    <NavMenuTab />