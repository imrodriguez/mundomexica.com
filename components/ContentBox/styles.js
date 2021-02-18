import styled from 'styled-components';

export const Content = styled.div`
    background: #fff;
    margin-top: 4em;

    > picture:first-child img {
        width: 100%;
    }    

    h1 {
        font-size: 3em;
        margin-bottom: 0;
        text-align: center;

        @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}px) {
            font-size: 2em;
        }
    }

    > div {
        padding: 2em 4em;

        @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}px) {
            padding: 2em 1em;
        }
    }
`;