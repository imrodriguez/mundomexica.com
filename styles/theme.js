import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './globalStyle';

const theme = {
    breakpoints: {
        mobile: '900'
    },
    fonts: {
        primary: '"Roboto Slab",sans-serif',
        secondary: '"Playfair Display",serif',
    }
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
    </ThemeProvider>
);

export default Theme;