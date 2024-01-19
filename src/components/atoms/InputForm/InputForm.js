import styled from "styled-components";

export const InputForm = styled.input`
  padding: 10px 5px;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: bold;
  color: ${({ theme }) => theme.color.black};
  &:focus {
    outline: none;
  }
`;