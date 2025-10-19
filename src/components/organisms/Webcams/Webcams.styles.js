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
