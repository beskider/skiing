import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.white };
  padding: 20px; 
  border-radius: 5px;
  width: 100%;  
  margin: 10px;  
`

export const HeaderWrapper = styled.div`
  margin: 20px 0;    
  display: grid;
  grid-template-columns: 100px 2fr 1fr;  
`

export const Logo = styled.div`    
  padding: 15px;  
  height: 100%;
  img {    
    max-width: 100%;
    max-height: 100%;
  }
`

export const TitleWrapper = styled.div`  
  margin: auto 0;    
`

export const Alt = styled.h3`
  margin-top: 20px;  
`

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 350px;
  grid-template-rows: minmax(100px, auto);
  gap: 20px;      
`

export const ResortView = styled.img`
  grid-column: 2 / 3;
  grid-row: 1;
  width: 100%;  
`

export const ResortImage = styled.img`
  grid-column: 2 / 3;
  grid-row: 2;
  width: 100%;     
`

export const ResortMap = styled.iframe`
  border-radius: 10px;
`

export const Content = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 4;    
`
