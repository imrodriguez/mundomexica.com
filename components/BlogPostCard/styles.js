import styled from "styled-components";

export const Card = styled.div`
  padding: 15px;
  position: relative;

  a {
    color: #000;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const CardHighlighted = styled(Card)`
  display: flex;
  flex-direction: row;
  align-items: stretch;

  a {
    display: contents;
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}px) {
    display: block;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  box-shadow: 4px 4px 10px 0px rgb(0 0 0 / 50%);
`;

export const CardImageHighlighted = styled(CardImage)`
  width: auto;
  max-width: 66%;

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}px) {
    max-width: 100%;
  }
`;

export const CardContent = styled.div`
  padding: 1em .3em;
  margin-top: -3px;

  h2 {
    margin-top: 0;
    margin-bottom: .5em;
    font-family: ${props => props.theme.fonts.primary};
  }

  p {
    font-weight: 200;
    margin: 0;
    text-align: justify;
  }
`;

export const CardContentHighlighted = styled(CardContent)`
  margin-top: 0;
  display: flex;
  padding-left: 2em;

  h2 {
    font-size: 2em;
  }

  > div {
    margin: auto;
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}px) {
    padding: 1em .3em;
    
    h2 {
      font-size: 1.5em;
    }

    > div {
      margin: 0;
    }
  }
`;

export const Category = styled.p`
  a {
    color: #999;
    font-family: ${props => props.theme.fonts.primary};
  }
`;
