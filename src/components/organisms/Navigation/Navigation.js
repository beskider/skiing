import { Wrapper, StyledNavLink } from "./Navigation.styles"

export const Navigation = () => {
  return (
    <Wrapper>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/resort/add">Add resort</StyledNavLink>
    </Wrapper>
  )
};
