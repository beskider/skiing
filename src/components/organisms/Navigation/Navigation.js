import { Wrapper, StyledNavLink } from "./Navigation.styles"

export const Navigation = () => {
  return (
    <Wrapper>
      <StyledNavLink to="/map">Map</StyledNavLink>
      <StyledNavLink to="/resorts">Resorts</StyledNavLink>
    </Wrapper>
  )
};
