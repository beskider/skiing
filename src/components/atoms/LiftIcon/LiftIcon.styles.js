import styled from "styled-components";

export const Wrapper = styled.div`  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  svg {
    height: 80px;    
    width: 80px;    
  }
`

export const LiftLabel = styled.p`  
  font-size: ${({ theme }) => theme.fontSize.xl };    
  font-weight: bold;
`