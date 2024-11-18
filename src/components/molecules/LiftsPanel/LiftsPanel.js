import { Wrapper, Title, IconWrapper } from "./LiftsPanel.styles"
import { LiftIcon } from "components/atoms/LiftIcon/LiftIcon"

export const LiftsPanel = ({ lifts }) => (
  <Wrapper>
    <Title>Wyciągi</Title>
    <IconWrapper>
      { Array.isArray(lifts) && lifts.map( (lift, index) => (        
          <LiftIcon liftType={lift.type} no={lift.count} key={index}/>                  
      ))}
    </IconWrapper>
  </Wrapper>
)
