import { Wrapper, Title, IconWrapper } from "./LiftsPanel.styles"
import { LiftIcon } from "components/atoms/LiftIcon/LiftIcon"

export const LiftsPanel = ({ lifts }) => (
  <Wrapper>
    <Title>Wyciągi</Title>
    <IconWrapper>
      { Array.isArray(lifts) && lifts.map( liftType => (
          <LiftIcon type={liftType} no={2} />                  
      ))}
    </IconWrapper>
  </Wrapper>
)
