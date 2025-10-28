import styled from "styled-components";

export const FormWrapper=styled.div`
  background-color: ${({ theme }) => theme.color.white };
  padding: 5px 20px; 
  padding-bottom: 20px;
  border-radius: 5px;
  width: 100%;
  max-width: 800px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  margin: 0 auto;
`

export const GeoInputBlock = styled.div`
  display: flex;
  button {
    margin: 2rem;
  }
` 
export const DoubleInputBlock = styled.div`
  gap: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const TripleInputBlock = styled.div`
  gap: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`
