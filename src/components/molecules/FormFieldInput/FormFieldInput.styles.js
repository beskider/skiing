import styled from "styled-components";

export const StyledFormField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 0.5rem;
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

export const Error = styled.div`
  background-color: ${({ theme }) => theme.color.red }; 
  width: 100%;
  height: 2rem;
  color: white;
  margin-top: -1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.2rem;
`