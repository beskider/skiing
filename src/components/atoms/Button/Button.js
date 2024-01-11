import { StyledButton } from "./Button.styles"

export const Button = ({ children, isRound }) => (
  <StyledButton isRound={isRound}>{children}</StyledButton>
)
