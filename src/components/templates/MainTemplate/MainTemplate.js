import { Navigation } from "components/organisms/Navigation/Navigation"
import { Wrapper, ContentWrapper } from "./MainTemplate.styles"
import { News } from "components/organisms/News/News"
import { MainCookieConsent } from "components/atoms/MainCookieConsent/MainCookieConsent"
import { useState } from 'react'

export const MainTemplate = ({ children }) => {
  
  const [ showNewsPanel, setShowNewsPanel ] = useState(true)
  
  return (
    <Wrapper $showSidePanel={showNewsPanel} >
      <MainCookieConsent />
      <Navigation />
      <ContentWrapper>
        {children}
      </ContentWrapper>
      <News showNewsPanel={showNewsPanel} setShowNewsPanel={setShowNewsPanel}/> 
    </Wrapper>
  )

}