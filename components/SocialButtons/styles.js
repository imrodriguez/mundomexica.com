import styled from 'styled-components';

export const Icon = styled.div`
    margin: 0 .5em;
    display: inline-block;
    cursor: pointer;

    a {
        color: #000;
    }

    svg {
        font-size: 2em;
    }

    &:hover {
        a {
            color: #666;
        }
    }
`;