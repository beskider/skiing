import styled from "styled-components";

export const Wrapper = styled.div`
  grid-column: 2 / 3;
  grid-row: 3;
  width: 100%;  
  height: fit-content;
  padding: 5px 10px;
  border: 2px solid ${({ theme }) => theme.color.grey};
  border-radius: 8px;
  display: flex;
  flex-direction: column;    
  gap: 15px;
`

export const Title = styled.h2`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 15px;
`

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;  
`
