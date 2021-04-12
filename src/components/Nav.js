import styled from 'styled-components';

const Nav = () => {
  return (
    <NavStyled>
      <h1>
        <a href='#' id='logo'>
          Annimix Studio
        </a>
      </h1>
      <ul>
        <li>
          <a href='#'>About</a>
        </li>
        <li>
          <a href='#'>Projects</a>
        </li>
        <li>
          <a href='#'>Contact</a>
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
