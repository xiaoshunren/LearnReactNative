import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Nav = styled.nav`
  background: linear-gradient(90deg, #ff00cc, #333399, #00ffcc, #ff00cc);
  background-size: 300% 300%;
  animation: gradient-flow 8s ease infinite;
  color: #fff;
  padding: 1em 2em;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavMenu = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  align-items: center;
  margin: 0;
`;

const NavItem = styled.li`
  margin: 0 1em;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 0.5em 1em;
  transition: all 0.3s ease;
  border-radius: 25px;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    color: #000;
  }
`;

const Navbar = ({ onSearch }) => {
  return (
    <Nav>
      <NavMenu>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/products">Products</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/tech-stack">Tech Stack</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact">Contact</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/login">Login</NavLink>
        </NavItem>
      </NavMenu>
      <SearchBar onSearch={onSearch} />
    </Nav>
  );
};

export default Navbar;
