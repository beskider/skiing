import { ResortsList } from "components/organisms/ResortsList/ResortsList";
import { Wrapper } from "./MainTemplate.styles"

export const MainTemplate = ({ children }) => (
  <Wrapper>
    <ResortsList />
  </Wrapper>
)