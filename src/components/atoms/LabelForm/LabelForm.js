import styled from "styled-components";

export const LabelForm = styled.label`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: bold;
  color: ${({ theme }) => theme.color.grey};
  padding-bottom: 2px;
  padding-left: 10px;  
`;
