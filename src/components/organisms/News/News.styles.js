import styled from "styled-components";

export const Wrapper = styled.div`
  grid-row: 2 / 3;
  grid-column: 2 / 3;
  margin: 20px 0;
  p { 
    line-height: 1.5;  
    text-align: justify;
  };
`

export const ArticleWrapper = styled.div`
  margin: 20px 5px;
  &:not(:last-child)::after {
    content: '';
    display: block;
    bottom: 0;
    height: 5px;
    width: 100%;
    margin: 20px 0;
    background-color: ${({ theme }) => theme.color.lightBlue};     
    background: linear-gradient(90deg, ${({ theme }) => theme.color.lightBlue} 0%, ${({ theme }) => theme.color.blue} 65%, ${({ theme }) => theme.color.lightBlue} 100%);
  }        
`

export const StyledDate = styled.div`
  background-color: ${({ theme }) => theme.color.mediumGrey};
  width: fit-content;
  padding: 1px 10px;
  font-size: ${({ theme }) => theme.fontSize.medium};
  line-height: 50%;
  margin: 5px 0;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 5px; 
  svg {    
    width: 15px;
    height: 15px;    
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  img {
    margin-top: 5px;
    margin-bottom: 5px;
    width: 100%;
    height: auto;
  } 
`
