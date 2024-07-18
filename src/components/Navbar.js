import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #1a1a1a;
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 0 1em;
  &:hover {
    color: #007bff;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <h1 style={{ color: '#fff' }}>Tech Company</h1>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/tech-stack">Tech Stack</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </Nav>
  );
};

export default Navbar;
