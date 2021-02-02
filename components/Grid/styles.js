import styled from "styled-components";

export const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(${(props) => (props.minWidth ? props.minWidth : "300px")}, 1fr)
  );
`;
