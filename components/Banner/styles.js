import styled from 'styled-components';

export const BannerWrapper = styled.div`
    img {
        width: 100%;
        height: 25em;
        object-fit: cover;

        @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}px) {
            height: 10em;
        }
    }
`;