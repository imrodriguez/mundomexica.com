import { Wrapper, Name, Separator, Surname } from "./styles";
import { SocialButtons } from '../SocialButtons';

const Title = ({ title, description }) => (
  <Wrapper>
    <h1>
      <Name>{title}</Name>
      <Separator src="/separador.png" />
      <Surname>{description}</Surname>
    </h1>
    <SocialButtons/>
  </Wrapper>
);

export { Title };

