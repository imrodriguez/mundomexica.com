import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Playfair Display";
    src: url(/fonts/Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf);
    font-display: swap;
  }

  @font-face {
    font-family: "Roboto Slab";
    src: url(/fonts/Roboto_Slab/RobotoSlab-VariableFont_wght.ttf);
    font-display: swap;
  }

  body {
    margin: 0;
  }

  a {
    color: #c62727;;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.primary};
  }

  h1 {
    font-size: 3em;
  }

  p {
      font-family: ${props => props.theme.fonts.secondary};
      text-align: justify;
      font-size: 1.3em;
  }

  p[align="center"] {
    text-align: center;
  }
`;
 
export { GlobalStyle };