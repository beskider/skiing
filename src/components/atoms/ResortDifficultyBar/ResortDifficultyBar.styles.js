import styled from "styled-components";

export const Wrapper = styled.div`
  height: 15px;
  display: flex;
  flex-direction: row;  
`

export const BarSegment = styled.div`
  width: 15px;
  background-color: ${({ color }) => color}
`