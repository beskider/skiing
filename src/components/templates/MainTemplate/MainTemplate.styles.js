import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;  
  background-color: ${({ theme }) => theme.color.lightGrey};  
  ${({ theme }) => theme.mediaQuery.tablet} {
    display: grid;
    grid-template-rows: 100px 1fr;
    grid-template-columns: ${({ $showSidePanel }) => $showSidePanel ? '7fr 3fr' : '1fr auto'};
  }
`;

export const ContentWrapper = styled.div`  
  padding: 10px;
  ${({ theme }) => theme.mediaQuery.tablet} {
    grid-row: 2 / 3;
    grid-column: 1 / 2;   
  }
`;
