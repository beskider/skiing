import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.white };
  padding: 5px 20px; 
  padding-bottom: 20px;
  border-radius: 5px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);  
  margin: 20px;
`;

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;  
`;

export const StyledLink = styled(Link)`
  text-decoration:none;
`;
