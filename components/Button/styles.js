import styled from "styled-components";

export const StyledButton = styled.button`
  background: none;
  border: 3px solid #000;
  padding: 0.5rem 2rem;
  font-family: ${props => props.theme.fonts.primary};
  font-size: 1.3rem;
  font-weight: 900;
  cursor: pointer;

  &:hover {
    background: #000;
    color: #fff;
  }

  ${(props) => {
    if (props.variant === "large") {
      return `font-size: 1.3em;`;
    }
  }}
`;

export const StyledLink = styled.a`
  background: none;
  border: 3px solid #000;
  padding: 0.5rem 2rem;
  font-family: ${props => props.theme.fonts.primary};
  font-size: 1.3rem;
  font-weight: 900;
  cursor: pointer;
  text-decoration: none;
  color: #000;

  &:hover {
    background: #000;
    color: #fff;
  }

  ${(props) => {
    if (props.variant === "large") {
      return `font-size: 1.3em;`;
    }
  }}
`;

