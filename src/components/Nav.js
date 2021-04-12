import styled from 'styled-components';
//import router
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <NavStyled>
      <h1>
        <Link to='/' id='logo'>
          Annimix Studio
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
    font-family: 'Lobster', cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 7rem;
    position: relative;
  }
`;

export default Nav;
