import styled from "styled-components";

export const Wrapper = styled.li`  
  padding: 5px 0;
  display: flex;  
  align-items: center;
  gap: 10px;    
  position: relative;  
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: darkgrey;
  }
`;

export const FigureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 50px;
`;

export const StyledItem = styled.div`
  color: ${({ theme }) => theme.color.black};
  padding: 5px 15px;
  p, a {
    margin: 0;
    
    font-size: ${({ theme }) => theme.fontSize.medium };
  }
  p:first-child {
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: bold;    
  }  
`;
