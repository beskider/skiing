import { Wrapper, StyledNavLink } from "./Navigation.styles"
import { NavigationSearchButton } from 'components/molecules/NavigationSearchutton/NavigationSearchButton';

export const Navigation = () => {
  return (
    <Wrapper>
      <StyledNavLink to="/map">Map</StyledNavLink>
      <StyledNavLink to="/resorts">Resorts</StyledNavLink>
      <NavigationSearchButton />     
    </Wrapper>
  )
};
