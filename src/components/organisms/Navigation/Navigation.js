import { Wrapper, StyledNavLink, MenuContainer } from "./Navigation.styles"
import { useEffect, useState } from 'react';
import { NavigationSearchButton } from 'components/molecules/NavigationSearchButton/NavigationSearchButton';
import Hamburger from 'hamburger-react';
import { theme } from 'assets/styles/theme';
import useWindowSize from 'hooks/useWindowSize';

export const Navigation = ({ setShowNewsPanel }) => {

  const [ width, height ] = useWindowSize()

  useEffect(() => {
    if (width < theme.mediaQuery.tablet ) {
      closeMenu()
    }
  }, [ width ])

  const [ isHamburgerOpen, setHamburgerOpen ] = useState(false)

  const toggleNavigation = () => {
    setHamburgerOpen(!isHamburgerOpen);
    if (width < theme.mediaQuery.tablet) {
      setShowNewsPanel(false)
    }
  }
  
  const closeMenu = () => setHamburgerOpen(false); 

  return (
    <Wrapper >
      <MenuContainer $isHamburgerOpen={isHamburgerOpen}>
        <StyledNavLink onClick={toggleNavigation} to="/map">Map</StyledNavLink>
        <StyledNavLink onClick={toggleNavigation} to="/resorts">Resorts</StyledNavLink>
        <StyledNavLink onClick={toggleNavigation} to="/webcams">Webcams</StyledNavLink>
        <NavigationSearchButton closeMenu={closeMenu}/>     
      </MenuContainer>
      <Hamburger toggled={isHamburgerOpen} toggle={setHamburgerOpen} color={theme.color.white}/>
    </Wrapper>
  )
};
