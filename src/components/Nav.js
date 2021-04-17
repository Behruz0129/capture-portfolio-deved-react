import styled from 'styled-components';
//import router
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <NavStyled>
      <h1>
        <Link to='/' id='logo'>
          Animmix Studio
        </Link>
      </h1>
      <ul>
        <li>
          <Link to='/'>About</Link>
        </li>
        <li>
          <Link to='/projects'>Projects</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </NavStyled>
  );
};

const NavStyled = styled.nav`
  min-height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  padding: 1rem 10rem;
  background-color: #282828;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    align-items: center;
    list-style: none;
  }
  #logo {
    font-size: 1.5rem;
    font-family: 'Zen Dots', cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 7rem;
    position: relative;
  }
`;

export default Nav;
