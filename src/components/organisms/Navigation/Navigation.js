import { Wrapper, StyledNavLink } from "./Navigation.styles"
import { NavigationSearchButton } from 'components/molecules/NavigationSearchButton/NavigationSearchButton';

export const Navigation = () => {
  return (
    <Wrapper>
      <StyledNavLink to="/map">Map</StyledNavLink>
      <StyledNavLink to="/resorts">Resorts</StyledNavLink>
      <StyledNavLink to="/webcams">Webcams</StyledNavLink>
      <NavigationSearchButton />     
    </Wrapper>
  )
};
