import { StyledButton } from "./Button.styles"

export const Button = ({ children, isRound }) => (
  <StyledButton isround={isRound}>{children}</StyledButton>
)
