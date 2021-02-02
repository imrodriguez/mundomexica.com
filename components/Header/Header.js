import { NavBar, Bar, Logo, Nav, HamburguerToggle } from "./styles";
import { Container } from "../Container";
import { useState } from "react";
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
import Menu from '../../config/menu.json';

const Header = ({ logo }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setOpen(open ? false : true);
  };

  return (
    <NavBar>
      <Container>
        <Bar>
          <div>
            <a href="/"><Logo src={logo.fields.file.url} alt={logo.fields.title} /></a>
          </div>
          <Nav dataOpen={open}>
            <ul>
              {Menu.map(item => (
                <a href={`/${item.fields.name ? 'categoria/' : ''}${item.fields.url}`}>
                  <li key={uuidv4()} data-active={router.query.slug === item.fields.url} >
                    {item.fields.title || item.fields.name}
                  </li>
                </a>
              ))}
            </ul>
          </Nav>
          <HamburguerToggle onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </HamburguerToggle>
        </Bar>
      </Container>
    </NavBar>
  );
};

export { Header };
