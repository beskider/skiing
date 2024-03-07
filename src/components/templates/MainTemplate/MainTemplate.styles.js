import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;  
  display: grid;
  grid-template-rows: 100px 1fr;
  grid-template-columns: 7fr 3fr;
  background-color: ${({ theme }) => theme.color.lightGrey};    
  overflow-y: hidden;
`;

export const ContentWrapper = styled.div`  
  display: flex;
  align-items: center;
  justify-content: center;
  grid-row: 2 / 3;
  grid-column: 1 / 2;
`;
