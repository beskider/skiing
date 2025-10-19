import styled from 'styled-components';

export const StyledWebcamTile = styled.div`
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