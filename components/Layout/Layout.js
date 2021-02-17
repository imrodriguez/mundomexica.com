import generalData from '../../config/generalData.json';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Background } from './styles';
import Theme from '../../styles/theme';

const Layout = ({ children }) => (
  <Theme>
    <Background image={`${generalData.background.fields.file.url}?fm=webp`}>
      <Header logo={`${generalData.logo}?fm=webp`} />
      {children}
      <Footer />
    </Background>
  </Theme>
);

export { Layout };