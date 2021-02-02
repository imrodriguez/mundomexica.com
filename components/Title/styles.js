import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  margin: 70px 0;

  p {
    margin-top: 0;
  }
`;

export const Separator = styled.img`
  display: block;
  margin: 0 auto;
  width: 19rem;

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}px) {
      margin-top: .2em;
  }
`;

export const Name = styled.span`
  font-family: ${props => props.theme.fonts.secondary};
  display: block;
  font-size: 2em;

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}px) {
      font-size: 1em;
  }
`;

export const Surname = styled.span`
  font-family: ${props => props.theme.fonts.secondary};
  font-weight: 100;
  font-size: .8em;

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}px) {
      font-size: .4em;
      display: inherit;
      margin-top: .6em;
  }
`;

