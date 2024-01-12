import styled from "styled-components";

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xxl };
  font-weight: bold;
  color: ${({ theme }) => theme.color.black };
  letter-spacing: 2px;
  text-transform: uppercase;  
`;
