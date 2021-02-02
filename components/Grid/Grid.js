import { Columns } from "./styles";

const Grid = ({ children, columns, maxWidth }) => (
  <Columns numOfColumns={columns} maxWidth={maxWidth}>
    {children}
  </Columns>
);

export { Grid };
