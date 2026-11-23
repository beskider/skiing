import { Wrapper, LeftGroup, RightGroup, Logo, LogoImage, LogoTitle, StyledNavLink, MenuContainer } from "./Navigation.styles"
import { useEffect, useState } from 'react';
import { NavigationSearchButton } from 'components/molecules/NavigationSearchButton/NavigationSearchButton';
import { LanguageSwitcher } from "components/molecules/LanguageSwitcher/LanguageSwitch";
import Hamburger from 'hamburger-react';
import { theme } from 'assets/styles/theme';
import { useWindowSize } from 'hooks/useWindowSize';
import { useTranslation } from 'react-i18next';

import { NavLink } from 'react-router-dom';

import logoImg from 'assets/images/logo.png';

export const Navigation = ({ setShowNewsPanel }) => {

  const [ width ] = useWindowSize()
  const { t } = useTranslation();

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
      <LeftGroup>
          <Logo to="/map">
            <LogoImage src={logoImg} alt="Skiing logo" />
            <LogoTitle>Skiing</LogoTitle>
          </Logo>
      </LeftGroup>
      <MenuContainer $isHamburgerOpen={isHamburgerOpen}>
        <StyledNavLink onClick={toggleNavigation} to="/map">{t('navigation.map')}</StyledNavLink>
        <StyledNavLink onClick={toggleNavigation} to="/resorts">{t('navigation.resorts')}</StyledNavLink>
        <StyledNavLink onClick={toggleNavigation} to="/webcams">{t('navigation.webcams')}</StyledNavLink>
        <NavigationSearchButton closeMenu={closeMenu}/>     
      </MenuContainer>
      <RightGroup>
        <LanguageSwitcher />
      </RightGroup>      
      <Hamburger 
        toggled={isHamburgerOpen} 
        toggle={setHamburgerOpen} 
        color={theme.color.white} 
        label="Show menu"
      />
    </Wrapper>
  )
};
