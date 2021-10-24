import { useState } from "react";
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
import { BreadcrumbJsonLd } from 'next-seo';
import { Container } from "../Container";
import styles from './Header.module.css';
import Menu from '../../config/menu.json';

const Header = ({ logo }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <header>
      <BreadcrumbJsonLd
        itemListElements={Menu.map((item, pos) => ({
            position: pos + 1,
            name: item.fields.title || item.fields.name,
            item: `https://mundomexica.com/${item.fields.name ? 'categoria/' : ''}${item.fields.url}`
          }))}
      />
      <div className={styles.BarWrapper}>
        <Container>
          <div className={styles.Bar}>
            <div>
              <a href="/">
                <img className={styles.Logo} src={`${logo.fields.file.url}?fm=webp&w=233`} alt={logo.fields.title} width={233} height={48} />
              </a>
            </div>
            <nav className={styles.Nav} data-open={open}>
              <ul>
                <a href="/">
                  <li data-active={router.query.slug === '/'}>
                    Inicio
                  </li>
                </a>
                {Menu.map(item => (
                  <a href={`/${item.fields.name ? 'categoria/' : ''}${item.fields.url}`} key={uuidv4()}>
                    <li data-active={router.query.slug === item.fields.url}>
                      {item.fields.title || item.fields.name}
                    </li>
                  </a>
                ))}
                <a href="/sobre-mi">
                  <li data-active={router.query.slug === '/sobre-mi'}>
                    Sobre mí
                  </li>
                </a>
              </ul>
            </nav>
            <button aria-label="open-menu" type="button" className={styles.HamburguerToggle} onClick={toggleMenu}>
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </Container>
      </div>
    </header>
  );
};

export { Header };
