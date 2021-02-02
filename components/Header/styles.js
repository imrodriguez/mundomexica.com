import styled from "styled-components";

export const NavBar = styled.div`
  background: #fff;
`;

export const Bar = styled.div`
  display: flex;
  height: 4em;
  padding: 0.5em 1em;
  align-items: center;

  & > div:first-child {
    flex-grow: 1;
  }
`;

export const Nav = styled.nav`
  text-align: rigth;

  ul {
    list-style: none;

    a {
      text-decoration: none;
      color: #000;
    }

    li {
      display: inline-block;
      margin: 0 1em;
      font-family: ${props => props.theme.fonts.primary};
      font-weight: 200;

      &:hover {
        font-weight: 800;
        cursor: pointer;
      }

      &[data-active="true"] {
        a {
          font-weight: bold;
        }
      }
    }
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}px) {
    display: ${props => props.dataOpen ? 'block' : 'none'};

    position: absolute;
    top: 4em;
    left: 0;
    width: 100%;
    background: #fff;

    ul li {
      display: block;
      padding: 0.5em 0;
    }
  }
`;

export const Logo = styled.img`
  height: 3em;
`;

export const HamburguerToggle = styled.div`
  display: none;
  cursor: pointer;

  svg {
    font-size: 1.5em;
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}px) {
    display: block;
  }
`;