import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.white };
  padding: 5px 20px; 
  padding-bottom: 20px;
  border-radius: 5px;
  width: 100%;
  max-width: 1400px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);    
  margin: 10px auto;
`;

export const WebcamsTilesContainer = styled.div`
  margin-top: 2rem;
  display: flex;    
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  height: 100%;
  min-height: 20rem;
`

export const MiniWebcamTile = styled.div`
    width: 16rem;  
    height: fit-content;
    border: none;    
    border-radius: 0.7rem;
    background-color: ${({ theme }) => theme.color.mediumGrey };
    display: flex;
    justify-content: center;    
    align-items: center;
    flex-direction: column;
    padding-top: 0.5rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 1rem;
    box-shadow:  3px 3px 5px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }    
    iframe {      
      width: 15rem; 
      height: 10rem;      
      width: 100%;
      margin-top: 0.3rem;
      background-color: ${({ theme }) => theme.color.realBlack };
      border: none;
      border-radius: 0.5rem;
    }
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.color.black };
      &:hover {
        color: ${({ theme }) => theme.color.blue };
      }
    }
`
