import styled from "styled-components";

export const StyledFormField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  svg {
    position: absolute;
    top: 50%;
    left: 0.8rem;
    transform: translate(0, -75%);
    width: 1.5rem;
    height: 1.5rem;    
    fill: ${({ theme }) => theme.color.black };
    stroke: ${({ theme }) => theme.color.black }; 
  }
`