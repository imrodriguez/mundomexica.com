import { StyledButton, StyledLink } from "./styles";

const Button = ({ children, action, variant }) => {
  if (typeof action === 'string') {
    return (
      <StyledLink href={action} variant={variant}>
        {children}
      </StyledLink>
    )
  }

  return (
    <StyledButton onClick={action} variant={variant}>
      {children}
    </StyledButton>
  );
};

export { Button };
