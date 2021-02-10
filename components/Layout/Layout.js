import generalData from '../../config/generalData.json';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Background } from './styles';
import Theme from '../../styles/theme';

const Layout = ({ children }) => (
  <Theme>
    <Background image={generalData.background.fields.file.url}>
      <Header logo={generalData.logo} />
      {children}
      <Footer />
    </Background>
  </Theme>
);

export { Layout };