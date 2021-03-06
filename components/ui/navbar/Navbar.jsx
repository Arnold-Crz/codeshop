import { useState } from 'react';
import styled from 'styled-components';

import BurgerMenu from './BurgerMenu';

export function Navbar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <Headers>
      <Nav>
        <Nav_Logo>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M11 12l-7.071 7.071-1.414-1.414L8.172 12 2.515 6.343 3.929 4.93 11 12zm0 7h10v2H11v-2z" />
          </svg>
          <h1>DevCruz</h1>
        </Nav_Logo>
        <Nav_Center>
          <ul className={`${active && 'active'}`}>
            <li>
              <a data-title="Inicio" href="#">
                Inicio{' '}
              </a>
            </li>
            <li>
              <a data-title="Tienda" href="#">
                Tienda
              </a>
            </li>
            <li>
              <a data-title="Nosotros" href="#">
                Nosotros
              </a>
            </li>
            <li>
              <a data-title="Servicios" href="#">
                Servicios
              </a>
            </li>
            <li>
              <a data-title="Contacto" href="#">
                Contacto
              </a>
            </li>
          </ul>
        </Nav_Center>
        <Nav_Right>
          <div className="nav_shop">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-1-2V4H5v16h14zM9 6v2a3 3 0 0 0 6 0V6h2v2A5 5 0 0 1 7 8V6h2z" />
            </svg>
          </div>
          <div className="nav_menu">
            <BurgerMenu active={active} handleClick={handleClick} />
          </div>
        </Nav_Right>
      </Nav>
    </Headers>
  );
}

const Headers = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  background: linear-gradient(to right, #0072f5 20%, #de2ff7 100%);
`;

const Nav_Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-left: 10px;

  h1 {
    font-size: 1.5rem;
    color: var(--blanco-color);
  }
  svg {
    fill: var(--blanco-color);
  }
`;

const Nav_Center = styled.div`
  display: flex;
  align-items: center;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      background-color: var(--gris-color);
      clip-path: circle(0% at 96% 5%);
      transition: all 0.8s ease-in-out;
      &.active {
        clip-path: circle(100% at 86% 50%);
      }
    }

    li > a {
      font-size: 1rem;
      color: var(--blanco-color);
      @media screen and (max-width: 768px) {
        position: relative;
        font-size: 2rem;
        color: var(--blanco-color);
        font-weight: 700;
        line-height: 4rem;
        text-transform: uppercase;

        ::after {
          content: attr(data-title);
          position: absolute;
          color: var(--blanco-color);
          font-size: 4rem;
          font-weight: 700;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-transform: uppercase;
          letter-spacing: 1rem;
          pointer-events: none;
          opacity: 0;
          z-index: -1;
        }
        :hover::after {
          opacity: 0.1;
          letter-spacing: 0;
          transition: letter-spacing 0.5s;
        }
      }
    }
  }
`;

const Nav_Right = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;

  @media screen and (max-width: 768px) {
    gap: 10px;
    margin-right: 0;
  }
  .nav_shop > svg {
    fill: #fff;
    width: 30px;
    height: 30px;
  }
  .nav_menu {
    display: none;
    @media screen and (max-width: 768px) {
      display: flex;
    }
  }
`;
