import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1em;

    @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}px) {
        grid-template-columns: 1fr 1fr;
    }

    > div {
        max-height: 430px;
        overflow: hidden;
    }
`;

export const Element = styled.div`
    text-align: center;
    height: 100%;
    min-height: 500px;
    cursor: pointer;
    position: relative;

    &:hover {
        img {
            filter: grayscale(100%);
        }

        p {
            background: #000;
            width: 100%;
            padding: 1em 0;
        }
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    p {
        font-weight: bold;
        text-transform: uppercase;
        text-decoration: none;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
        font-size: 1.5em;
        text-align: center;
        font-family: ${props => props.theme.fonts.primary};

        @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}px) {
            background: #000;
            width: 100%;
            font-size: 1.2em;
            padding: 1em 0;
        }
    }
`;