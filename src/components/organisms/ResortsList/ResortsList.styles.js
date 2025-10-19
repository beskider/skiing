import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.white };
  padding: 5px 20px; 
  padding-bottom: 20px;
  border-radius: 5px;
  width: 100%;
  max-width: 800px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);    
  margin: 10px auto;
`;

export const StyledResortList = styled.ul`
  list-style: none;
  padding: 0;  
  margin-top: 1rem;
`;

export const StyledButtons = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
  gap: 5px;
  align-items: center;
  padding: 20px 5px;
`;

export const StyledLink = styled(Link)`
  text-decoration:none;
`;
