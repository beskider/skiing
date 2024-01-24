import { Navigation } from "components/organisms/Navigation/Navigation"
import { Wrapper } from "./MainTemplate.styles"

export const MainTemplate = ({ children }) => (
  <Wrapper>
    <Navigation/>
    {children}
  </Wrapper>
)
