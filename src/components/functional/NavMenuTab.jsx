import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { HomeIcon, AboutUsIcon, AwardsIcon, EventLayoutIcon, PartnerExhibitorKitIcon } from '../../icons';
import MenuTabButton from '../foundations/MenuTabButton';
import theme from '../../theme';

const MenuContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  color: white;
 

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
  z-index: 100;
  max-height: 50px;
  transition: background-color 0.3s ease;

  &.active {
    background-color: transparent;
  }

  &:hover {
    background-color:  ${({ hoverColor }) => hoverColor}; 
  }

  @media (max-width: 768px) {
    padding: 5px;
  }
`;

function NavMenuTab() {
    return (
        <MenuContainer>
            <Nav>
                <NavLinkStyled hoverColor={theme.colors.brand.red} to="/" end>
                    {({ isActive }) => (
                        <MenuTabButton
                            icon={<HomeIcon />}
                            text="Home"
                            selected={isActive}
                            iconColor={theme.colors.brand.red}
                            hoverColor={theme.colors.primaryBackground}
                        />
                    )}
                </NavLinkStyled>
                <NavLinkStyled hoverColor={theme.colors.brand.blue} to="/about-us">
                    {({ isActive }) => (
                        <MenuTabButton
                            icon={<AboutUsIcon />}
                            text="About Us"
                            selected={isActive}
                            iconColor={theme.colors.brand.blue}
                            hoverColor={theme.colors.primaryBackground}
                        />
                    )}
                </NavLinkStyled>
                <NavLinkStyled hoverColor={theme.colors.brand.green} to="/awards">
                    {({ isActive }) => (
                        <MenuTabButton
                            icon={<AwardsIcon />}
                            text="Awards"
                            selected={isActive}
                            iconColor={theme.colors.brand.green}
                            hoverColor={theme.colors.primaryBackground}
                        />
                    )}
                </NavLinkStyled>
                <NavLinkStyled hoverColor={theme.colors.brand.yellow} to="/layout">
                    {({ isActive }) => (
                        <MenuTabButton
                            icon={<EventLayoutIcon />}
                            text="Event Layout"
                            selected={isActive}
                            iconColor={theme.colors.brand.yellow}
                            hoverColor={theme.colors.primaryBackground}
                        />
                    )}
                </NavLinkStyled>

            </Nav>
        </MenuContainer>
    );
}

export default NavMenuTab;
/*
  <NavLinkStyled hoverColor={theme.colors.brand.orange} to="/partners">
                    {({ isActive }) => (
                        <MenuTabButton
                            icon={<PartnerExhibitorKitIcon />}
                            text="Partners"
                            selected={isActive}
                            iconColor={theme.colors.brand.orange}
                            hoverColor={theme.colors.primaryBackground}
                        />
                    )}
                </NavLinkStyled>

*/