import styled from 'styled-components'

export const StyledNavigationSearchButton = styled.div`
  border: ${({ $isOpen, theme }) => $isOpen ? `2px solid ${theme.color.white}` : 'none'};
  display: flex;
  align-items: center;
  border-radius: 2rem;  
  display: flex;
  align-items: center;  
  padding: 0.3rem 1rem;
  margin-bottom: 0.5rem;
  width: ${({ $isOpen }) => $isOpen ? '19rem': '4rem' };
  transition: width 0.4s ease-in-out;
  position: relative;
 `

export const NavigationSearchButtonWithIcon = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  background-color: transparent;    
  border: none;        
  display: flex;
  align-items: center;
  justify-content: center;
  svg {    
    width: 75%;
    height: 75%;    
    fill: ${({ theme }) => theme.color.white };
    stroke: ${({ theme }) => theme.color.white };
    margin: 0;
  }
`

export const NavigationSearchInput = styled.input`
  border: none;
  height: 2rem;
  background: transparent;
  color: ${({ theme }) => theme.color.white };
  outline: none;
  margin-left: 5px;
  font-size: 1.2rem;
  &::placeholder {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.color.white };
    opacity: 0.8;
  }  
`