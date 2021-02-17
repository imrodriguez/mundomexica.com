import styled from 'styled-components';

export const Content = styled.div`
    background: #fff;
    margin-top: 4em;

    > picture:first-child img {
        width: 100%;
    }    

    > div {
        padding: 2em 4em;

        @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}px) {
            padding: 2em 1em;
        }
    }
`;