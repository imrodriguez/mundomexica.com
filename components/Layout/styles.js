import styled from 'styled-components';

export const Background = styled.div`
    background-image: url('${(props) => props.image}');
    min-height: 100vh;
`;