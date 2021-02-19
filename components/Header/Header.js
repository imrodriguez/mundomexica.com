import { useState } from "react";
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
import { Container } from "../Container";
import { NavBar, Bar, Logo, Nav, HamburguerToggle } from "./styles";
import Menu from '../../config/menu.json';
import { BreadcrumbJsonLd } from 'next-seo';

const Header = ({ logo }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <BreadcrumbJsonLd
        itemListElements={Menu.map((item, pos) => {
          return {
            position: pos + 1,
            name: item.fields.title || item.fields.name,
            item: `https://mundomexica.com/${item.fields.name ? 'categoria/' : ''}${item.fields.url}`
          }
        })}
      />
      <NavBar>
        <Container>
          <Bar>
            <div>
              <a href="/"><Logo src={`${logo.fields.file.url}?fm=webp`} alt={logo.fields.title} /></a>
            </div>
            <Nav dataOpen={open}>
              <ul>
                <a href={'/'}>
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
                <a href={'/sobre-mi'}>
                  <li data-active={router.query.slug === '/sobre-mi'}>
                    Sobre mí
                  </li>
                </a>
              </ul>
            </Nav>
            <HamburguerToggle onClick={toggleMenu}>
              <FontAwesomeIcon icon={faBars} />
            </HamburguerToggle>
          </Bar>
        </Container>
      </NavBar>
    </>
  );
};

export { Header };
