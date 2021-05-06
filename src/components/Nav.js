//react hooks
import { useRef } from 'react';
//styled
import styled from 'styled-components';
//import router
import { Link } from 'react-router-dom';
//framer motion
import { motion } from 'framer-motion';
//icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fab);

const Nav = ({ isOpen, setIsOpen }) => {
  const bgRef = useRef();
  const closeWithBg = e => {
    if (bgRef.current !== e.target) {
      setIsOpen(!isOpen);
    }
  };
  return (
    <NavStyled
      initial={{ y: '-100%' }}
      animate={{ y: '0%', transition: { duration: 0.5, ease: 'easeInOut' } }}
    >
      <h1>
        <Link to='/' id='logo'>
          Animmix Studio
        </Link>
      </h1>
      <div className='burger' onClick={() => setIsOpen(!isOpen)}>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
      </div>
      {/* Secondary NavLinks */}
      {isOpen && (
        <div className='bg' onClick={closeWithBg}>
          <div className='nav' ref={bgRef}>
            <div className='ul'>
              <li>
                <Link className='link' to='/'>
                  About
                </Link>
              </li>
              <li>
                <Link className='link' to='/projects'>
                  Projects
                </Link>
              </li>
              <li>
                <Link className='link' to='/contact'>
                  Contact
                </Link>
              </li>
            </div>
            <div className='scl'>
              <a
                href='https://www.instagram.com/________legion_._._._/'
                target='_blank'
                rel='noreferrer'
              >
                <FontAwesomeIcon icon={['fab', 'instagram']} size='2x' />
              </a>
              <a
                href='https://www.youtube.com/channel/UCh_hZ2kei-rEgiqOwDN-PJQ'
                target='_blank'
                rel='noreferrer'
              >
                <FontAwesomeIcon icon={['fab', 'youtube']} size='2x' />
              </a>
              <a href='https://tiktok.com' target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={['fab', 'tiktok']} size='2x' />
              </a>
              <a href='https://artstation.com' target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={['fab', 'artstation']} size='2x' />
              </a>
              <a
                href='https://t.me/curious_behruz'
                target='_blank'
                rel='noreferrer'
              >
                <FontAwesomeIcon icon={['fab', 'telegram']} size='2x' />
              </a>
            </div>
          </div>
        </div>
      )}
      {/* Main NavLinks */}
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

const NavStyled = styled(motion.nav)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  padding: 1.5rem 10rem;
  background-color: rgba(40, 40, 40);
  backdrop-filter: blur(40px);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10000000;
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
    padding-left: 8rem;
    position: relative;
  }
  .burger {
    display: none;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 3rem;
    cursor: pointer;
    .line {
      width: 100%;
      height: 0.2rem;
      background: white;
      margin-bottom: 0.5rem;
    }
  }
  .bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    min-height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    .nav {
      width: 25rem;
      min-height: 100vh;
      background: #1b1b1b;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .ul {
        list-style: none;
        width: 100%;
        li {
          padding: 2rem 0rem;
          width: 100%;
          a {
            font-size: 2rem;
            padding-left: 2rem;
            transition: 0.5s ease all;
            &:hover {
              padding-left: 3rem;
            }
          }
        }
      }
      .scl {
        margin-top: 5rem;
        width: 100%;
        padding-left: 2rem;
        a {
          margin-right: 2rem;
          transition: 0.5s ease all;
          color: #363636;
          &:hover {
            color: #fff;
          }
        }
      }
    }
    @media (min-width: 800px) {
      display: none;
    }
  }
  @media (max-width: 1200px) {
    padding: 1.5rem 5rem;
  }
  @media (max-width: 800px) {
    ul {
      display: none;
    }
    .burger {
      display: flex;
    }
  } ;
`;

export default Nav;
