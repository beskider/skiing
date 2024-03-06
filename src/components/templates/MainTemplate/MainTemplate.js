import { Navigation } from "components/organisms/Navigation/Navigation"
import { Wrapper, ContentWrapper } from "./MainTemplate.styles"
import { News } from "components/organisms/News/News"

export const MainTemplate = ({ children }) => (
  <Wrapper>
    <Navigation/>
    <ContentWrapper>
      {children}
    </ContentWrapper>
    <News/>
  </Wrapper>
)
