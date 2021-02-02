import styled from "styled-components";

export const StyledSection = styled.div`
  padding: 2rem 0;
  ${(props) => (props.center ? "text-align: center" : null)}
`;
