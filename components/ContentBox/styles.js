import styled from 'styled-components';

export const Content = styled.div`
    background: #fff;
    margin-top: 4em;

    .lazyload-wrapper {
        padding: 0;
    }

    img.image-article {
        width: 100%;
        height: auto;
    }    

    h1 {
        font-size: 3em;
        margin-bottom: 0;
        text-align: center;

        @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}px) {
            font-size: 2em;
        }
    }

    .content {
        padding: 2em 4em;

        @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}px) {
            padding: 2em 1em;
        }
    }

    .time {
        text-align: center;
    }

    .social {
        padding-top: 0;
        p {
            text-align: center;
            font-weight: bold;
        }

        .social-section {
            > div {
                width: max-content;
                margin: 0 auto;
            }
        }
    }
`;