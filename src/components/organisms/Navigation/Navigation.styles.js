import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.nav`
  background-color: ${({ theme }) => theme.color.lightBlue};
  grid-row: 1 / 2;
  grid-column: 1 / 3;
  display: flex;
  flex-direction: row;
  align-items: center;  
  justify-content: end;
  position: relative;
  padding: 1rem;
  ${({ theme }) => theme.mediaQuery.tablet} {
    justify-content: center;
  }
  .hamburger-react {
    z-index: 1060;
    display: unset;
    margin-right: 2rem;
    ${({ theme }) => theme.mediaQuery.tablet} {
      display: none;
    }
  } 
`;

export const MenuContainer = styled.div`
  display: ${({ $isHamburgerOpen }) => ($isHamburgerOpen ? 'block' : 'none')};
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.lightBlue};
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
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.xl};
  text-decoration: none;
  font-weight: bold;  
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  margin: 1rem;
  ${({ theme }) => theme.mediaQuery.tablet} {
    margin: 0 20px;
    font-size: ${({ theme }) => theme.fontSize.large};
    &:hover:not(.active) {    
      transform: scale(1.25) rotate(-10deg);
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
      &::after {
        opacity: 1;
      }
    }
  }
`;

export const StyledLink = styled(Link)``