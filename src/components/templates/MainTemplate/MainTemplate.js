import { Navigation } from "components/organisms/Navigation/Navigation"
import { Wrapper, ContentWrapper } from "./MainTemplate.styles"
import { News } from "components/organisms/News/News"
import { MainCookieConsent } from "components/atoms/MainCookieConsent/MainCookieConsent"

export const MainTemplate = ({ children }) => (
  <Wrapper>
    <MainCookieConsent />
    <Navigation />
    <ContentWrapper>
      {children}
    </ContentWrapper>
    <News />
  </Wrapper>
)
