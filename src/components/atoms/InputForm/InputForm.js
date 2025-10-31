import styled from "styled-components";

export const InputForm = styled.input`
  padding: 12px;
  border-radius: 10px;
  ${({ $isInputWithIcon }) => $isInputWithIcon && 'text-indent: 2.2rem'};
  border: ${({ $isError }) => $isError ? '3px solid red' : 'none'};  
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: bold;
  color: ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.lightGrey};
  opacity: 0.5;
  transition: opacity 0.3s ease-in-out;
  width: 100%;
  margin-bottom: 12px;
  box-shadow:  8px 8px 5px rgba(0, 0, 0, 0.3);
  &::placeholder {
    opacity: 0.5;
  }
  &:hover {
    opacity: 0.7;
  }
  &:focus {
    outline: none;      
    opacity: 1;
  }  
`;