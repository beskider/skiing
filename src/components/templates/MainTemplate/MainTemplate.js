import { Navigation } from "components/organisms/Navigation/Navigation"
import { Wrapper, ContentWrapper } from "./MainTemplate.styles"

export const MainTemplate = ({ children }) => (
  <Wrapper>
    <Navigation/>
    <ContentWrapper>
      {children}
    </ContentWrapper>
  </Wrapper>
)
