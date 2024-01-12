import styled from "styled-components"

export const StyledButton = styled.button`  
  width: ${({ isRound }) => isRound ? '25px' : 'auto'};
  height: ${({ isRound }) => isRound ? '25px' : 'auto'};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ isRound }) => isRound ? '50%' : '4px'};
  ${({ isRound }) => isRound || 'padding: 8px 30px'};
  border: none;
  background-color: ${({ theme }) => theme.color.lightBlue };
  color: ${({ theme }) => theme.color.white };
  font-size: ${({ theme }) => theme.fontSize.large };    
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  
  svg {
    width: 100%;
    height: 100%;    
    fill: ${({ theme }) => theme.color.white };
    stroke: ${({ theme }) => theme.color.white };    
  }  
`