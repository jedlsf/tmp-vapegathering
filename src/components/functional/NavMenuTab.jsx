import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { HomeIcon, DateIcon, EventLayoutIcon, PartnerExhibitorKitIcon, AwardsIcon, AboutUsIcon } from '../../icons';
import MenuTabButton from '../foundations/MenuTabButton';
import theme from '../../theme';

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
                            hoverColor={theme.colors.primaryBackground}
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
                            hoverColor={theme.colors.primaryBackground}

                        />
                    )}
                </NavLinkStyled>
                <NavLinkStyled hoverColor="#25a27d" to="/awards">
                    {({ isActive }) => (
                        <MenuTabButton
                            icon={<AwardsIcon />}
                            text="Awards"
                            selected={isActive}
                            iconColor="#25a27d"
                            hoverColor={theme.colors.primaryBackground}
                        />
                    )}
                </NavLinkStyled>
                <NavLinkStyled hoverColor="#e4a723" to="/event-layout">
                    {({ isActive }) => (
                        <MenuTabButton
                            icon={<EventLayoutIcon />}
                            text="Event Layout"
                            selected={isActive}
                            iconColor="#e4a723"
                            hoverColor={theme.colors.primaryBackground}
                        />
                    )}
                </NavLinkStyled>
                <NavLinkStyled hoverColor="#19321c" to="/partners">
                    {({ isActive }) => (
                        <MenuTabButton
                            icon={<PartnerExhibitorKitIcon />}
                            text="Partners"
                            selected={isActive}
                            iconColor="#19321c"
                            hoverColor={theme.colors.primaryBackground}
                        />
                    )}
                </NavLinkStyled>
            </Nav>
        </MenuContainer>
    );
}

export default Header;
