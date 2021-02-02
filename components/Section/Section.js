import { StyledSection } from "./styles";

const Section = ({ children, center }) => (
  <StyledSection center={center}>{children}</StyledSection>
);

export { Section };
