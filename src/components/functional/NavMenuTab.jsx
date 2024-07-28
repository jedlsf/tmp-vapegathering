import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { HomeIcon, SearchIcon, TicketsIcon, WalletIcon, ProfileIcon } from '../../icons';
import MenuTabButton from '../foundations/MenuTabButton';

const MenuContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  color: white;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  justify-content: center;
`;

const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
  z-index: 100;
  max-height: 20px;
  transition: background-color 0.3s ease;

  &.active {
    background-color: transparent;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryBackground}; 
  }
`;

function Header() {
    return (
        <MenuContainer>
            <Nav>
                <NavLinkStyled to="/" end>
                    {({ isActive }) => (
                        <MenuTabButton
                            icon={<HomeIcon />}
                            text="Home"
                            selected={isActive}
                        />
                    )}
                </NavLinkStyled>
                <NavLinkStyled to="/search">
                    {({ isActive }) => (
                        <MenuTabButton
                            icon={<SearchIcon />}
                            text="Search"
                            selected={isActive}
                        />
                    )}
                </NavLinkStyled>
                <NavLinkStyled to="/my-tickets">
                    {({ isActive }) => (
                        <MenuTabButton
                            icon={<TicketsIcon />}
                            text="My Tickets"
                            selected={isActive}
                        />
                    )}
                </NavLinkStyled>
                <NavLinkStyled to="/my-wallet">
                    {({ isActive }) => (
                        <MenuTabButton
                            icon={<WalletIcon />}
                            text="My Wallet"
                            selected={isActive}
                        />
                    )}
                </NavLinkStyled>
                <NavLinkStyled to="/my-profile">
                    {({ isActive }) => (
                        <MenuTabButton
                            icon={<ProfileIcon />}
                            text="My Profile"
                            selected={isActive}
                        />
                    )}
                </NavLinkStyled>
            </Nav>
        </MenuContainer>
    );
}

export default Header;
