import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { HomeIcon, DateIcon, EventLayoutIcon, PartnerExhibitorKitIcon, AwardsIcon, AboutUsIcon } from '../../icons';
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
    background-color:  ${({ hoverColor }) => hoverColor}; 
  
    
  }
`;

function Header() {
    return (
        <MenuContainer>
            <Nav>
                <NavLinkStyled hoverColor="#e25836" to="/" end >
                    {({ isActive }) => (
                        <MenuTabButton
                            icon={<HomeIcon />}
                            text="Home"
                            selected={isActive}
                            iconColor="#e25836"
                        />
                    )}
                </NavLinkStyled>
                <NavLinkStyled hoverColor="#11acca" to="/about">
                    {({ isActive }) => (
                        <MenuTabButton
                            icon={<AboutUsIcon />}
                            text="About Us"
                            selected={isActive}
                            iconColor="#11acca"
                        />
                    )}
                </NavLinkStyled>
                <NavLinkStyled to="/awards">
                    {({ isActive }) => (
                        <MenuTabButton
                            icon={<AwardsIcon />}
                            text="Awards"
                            selected={isActive}
                        />
                    )}
                </NavLinkStyled>
                <NavLinkStyled to="/event-layout">
                    {({ isActive }) => (
                        <MenuTabButton
                            icon={<EventLayoutIcon />}
                            text="Event Layout"
                            selected={isActive}
                        />
                    )}
                </NavLinkStyled>
                <NavLinkStyled to="/partners">
                    {({ isActive }) => (
                        <MenuTabButton
                            icon={<PartnerExhibitorKitIcon />}
                            text="Partners"
                            selected={isActive}
                        />
                    )}
                </NavLinkStyled>
            </Nav>
        </MenuContainer>
    );
}

export default Header;
