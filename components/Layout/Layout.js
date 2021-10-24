import generalData from "../../config/generalData.json";
import { Header } from "../Header";
import { Footer } from "../Footer";

const Layout = ({ children }) => (
  <>
    <div style={{
      backgroundImage: `url(https:${generalData.background.fields.file.url}?fm=webp)`,
      minHeight: "100vh"
    }}
    >
      <Header logo={generalData.logo} />
      <main>{children}</main>
      <Footer />
    </div>
  </>
);

export { Layout };
