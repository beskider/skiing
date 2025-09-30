import styled from "styled-components"

export const StyledMapButton = styled.button`
  width: 40px;
  height: 40px;   
  border: 2px solid ${({theme}) => theme.color.grey};
  background-color: ${({theme}) => theme.color.mediumGrey};
  border-radius: 3px;    
  margin-top: 2px;
  display: flex;
  padding: 5px;
  align-items: center;  
  justify-content: center;
  transition-duration: 0.4s;  
  &:hover {
    background-color: ${({theme}) => theme.color.grey};
  }
  &:active{
    background-color: ${({theme}) => theme.color.lightGrey};
  }
  p {
    color: #000;
    font-weight: 700;
    font-size: ${({theme}) => theme.fontSize.large};
  }
  svg {    
    width: 100%;
    height: 100%;
  }  
`;

