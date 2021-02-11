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