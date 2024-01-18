import { Wrapper, StyledNavLink } from "./Navigation.styles"

export const Navigation = () => {
  return (
    <Wrapper>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/add-resort">Add resort</StyledNavLink>
    </Wrapper>
  )
}

