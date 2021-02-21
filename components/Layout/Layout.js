import generalData from '../../config/generalData.json';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Background } from './styles';
import Theme from '../../styles/theme';

const Layout = ({ children }) => (
  <Theme>
    <Background image={`${generalData.background.fields.file.url}?fm=webp&q=50`}>
      <Header logo={generalData.logo} />
      {children}
      <Footer />
    </Background>
  </Theme>
);

export { Layout };