import styled from "styled-components"

export const StyledButton = styled.button`  
  width: ${({ isRound }) => isRound ? '25px' : 'auto'};
  height: ${({ isRound }) => isRound ? '25px' : 'auto'};
  border-radius: ${({ isRound }) => isRound ? '50%' : '4px'};
  ${({ isRound }) => isRound || 'padding: 8px 30px'};
  border: none;
  color: white;
  background-color: blue;
  font-weight: bold;
  font-size: 14px;    
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 100%;
    height: 100%;    
    fill: white;
    stroke: white;    
  }  
`