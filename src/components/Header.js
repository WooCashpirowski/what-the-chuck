import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
  position: fixed;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
    li {
      margin: 0.5rem;
      padding: 0.5rem 1rem;
      a {
        text-decoration: none;
        font-weight: 500;
        color: white;
      }
    }
  }
`;

const Header = () => {
  return (
    <Navbar>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/political">Political</Link>
        </li>
        <li>
          <Link to="/religion">Religion</Link>
        </li>
        <li>
          <Link to="/explicit">Explicit</Link>
        </li>
      </ul>
    </Navbar>
  );
};

export default Header;
