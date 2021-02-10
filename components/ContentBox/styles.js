import styled from 'styled-components';

export const Content = styled.div`
    background: #fff;
    margin-top: 4em;

    img {
        width: 100%;
    }    

    > div {
        padding: 2em 4em;

        @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}px) {
            padding: 2em 1em;
        }
    }

    h1, h2, h3 {
        font-family: ${props => props.theme.fonts.primary};
    }

    h1 {
        font-size: 3em;
        margin-bottom: 0;
        text-align: center;

        @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}px) {
            font-size: 2em;
        }
    }

    h3 {
        font-size: 2em;
    }

    p {
        font-family: ${props => props.theme.fonts.secondary};
        text-align: justify;
        font-size: 1.3em;
    }

    figcaption {
        background: #eee;
        text-align: center;
        padding: .7em;
        margin-top: -.3em;
    }
`;