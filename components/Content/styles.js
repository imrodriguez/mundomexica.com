import styled from 'styled-components';

export const ImageWrapper = styled.div`
    width: ${props => props.height > 390 ? 500 : props.width}px;
    max-width: 100%;
    margin: 0 auto;

    img {
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

    hr + p {
        text-align: center;
    }
`;