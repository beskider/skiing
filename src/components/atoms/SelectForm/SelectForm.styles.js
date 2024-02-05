import styled from "styled-components";

export const StyledSelectForm = styled.select`
  width: 100%;
  padding: 5px;
  border-radius: 10px;
  border: none;
  opacity: 0.3;
  transition: opacity 0.3s ease-in-out;
  margin-bottom: 12px;
  &:hover {
    opacity: 0.7;
  }
  &:focus {
    outline: none;      
    opacity: 1;
  }
`;

export const StyledOption = styled.option`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: bold;
  color: ${({ theme }) => theme.color.black}; 
  background-color: ${({ theme }) => theme.color.lightGrey};
  padding: 3px;
`;
