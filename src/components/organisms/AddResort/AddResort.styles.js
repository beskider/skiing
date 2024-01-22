import styled from "styled-components";

export const FormWrapper=styled.div`
  background-color: ${({ theme }) => theme.color.white };
  padding: 5px 20px; 
  border-radius: 5px;
  width: 100%;
  max-width: 800px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
`;