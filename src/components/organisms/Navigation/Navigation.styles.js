import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.nav`
  background-color: ${({ theme }) => theme.color.lightBlue};
  display: flex;
  flex-direction: row;
  align-items: center;  
  justify-content: center;
  grid-row: 1 / 2;
  grid-column: 1 / 3;
`;

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.large};
  text-decoration: none;
  font-weight: bold;
  margin: 0 20px;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
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
`;

export const StyledLink = styled(Link)``