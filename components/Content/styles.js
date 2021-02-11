import styled from 'styled-components';

export const ImageWrapper = styled.div`
    width: ${props => props.width > 350 ? props.width : 350}px;
    max-width: 100%;
    margin: 0 auto;

    img {
        width: 100%;
    }

    @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}px) {
        width: 100%;
    }
`;

export const Wrapper = styled.div`
    p {
        min-height: 1.5em;
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

    h2 {
        font-size: 2.5em;
        text-align: center;
    }

    h3 {
        font-size: 2em;
        text-align: center;
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