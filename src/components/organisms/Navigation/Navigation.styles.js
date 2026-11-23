import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.nav`
  background-color: ${({ theme }) => theme.color.navy};
  grid-row: 1 / 2;
  grid-column: 1 / 3;
  position: relative;      
  display: flex;
  justify-content: space-between;
  align-items: center;      
  ${({ theme }) => theme.mediaQuery.tablet} {
    display: grid;
    grid-template-columns: 2fr 5fr 2fr;
  }
  .hamburger-react {
    z-index: 1060;
    display: unset;
    ${({ theme }) => theme.mediaQuery.tablet} {
      display: none;
    }
  }
`

export const LeftGroup = styled.div`
  height: 5rem;  
`

export const RightGroup = styled.div`
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding-right: 1rem; 
`

export const Logo = styled(NavLink)`
  text-decoration: none;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 1rem;
  &:hover {  
    filter: brightness(1.5);
    transition-duration: 0.5s;  
  }
`

export const LogoImage = styled.img`    
  height: 100%;
  object-fit: contain;
  display: none;
  ${({ theme }) => theme.mediaQuery.tablet} {
    display: unset;
  }
`

export const LogoTitle = styled.h1`    
  color: ${({ theme }) => theme.color.lighterBlue};
`

export const MenuContainer = styled.div`
  display: ${({ $isHamburgerOpen }) => ($isHamburgerOpen ? 'block' : 'none')};
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.navy};
  z-index: 1050;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: fit-content;
  padding: 1rem;
  ${({ theme }) => theme.mediaQuery.tablet} {  
    width: auto;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;  
    align-items: center;  
    justify-content: center;
    padding: 0;
  }
`

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.lighterBlue};
  font-size: ${({ theme }) => theme.fontSize.xl};
  text-decoration: none;
  font-weight: bold;  
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  margin: 1rem;
  &.active {
    color: ${({ theme }) => theme.color.white};
  }
  &:hover:not(.active) {    
    color: ${({ theme }) => theme.color.white};
    transition-duration: 0.5s;    
  }
  ${({ theme }) => theme.mediaQuery.tablet} {
    margin: 0 20px;
    font-size: ${({ theme }) => theme.fontSize.large};
    &:hover:not(.active) {    
      color: ${({ theme }) => theme.color.white};
      transition-duration: 0.5s;    
    }
    &::after {
      content: '';
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
      width: 20px;
      height: 4px;
      background-color: ${({ theme }) => theme.color.white};
      margin-top: 4px;
    }  
    &.active {
      color: ${({ theme }) => theme.color.white};
      &::after {
        opacity: 1;        
      }
    }
  }
`;
