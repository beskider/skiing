import styled from 'styled-components';
  
export const LangSwitchButtonWrapper = styled.div`
  position: relative;  
`

export const LangSwitchButton = styled.button`
  background-color: transparent;
  border: none;  
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  column-gap: 0.5rem;  
  align-items: center;
  padding: 0 0.5rem;
  color: ${({ theme, $active }) => $active ? theme.color.white : theme.color.lighterBlue };  
  &:hover {
    color: ${({ theme }) => theme.color.white};
    transition-duration: 0.5s;    
  }  
`

export const Flag = styled.img`
  width: 32px;
  height: 32px;
`

export const LangMenu = styled.ul`
  position: absolute;
  top: 0;
  right: 0;
  background-color:  ${({ theme }) => theme.color.lightGrey};
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.5);
  border-radius: 0.2rem;
  z-index: 1100;
`

export const LangMenuItem = styled.li`  
  list-style: none;
`

export const LangMenuItemButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  display: grid;
  grid-template-columns: 1.5rem 1fr 1rem;
  align-items: center;
  width: 100%;
  gap: 1rem;
  padding: 0 0.5rem;
  color: ${({ theme }) => theme.color.navy};
  &:hover {
    background-color: ${({ theme }) => theme.color.grey};
    transition-duration: 0.5s;    
  }  
`
