//styled
import styled from 'styled-components';
//icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
library.add(fab);

const Footer = () => {
  return (
    <FooterStyled>
      <div className='topper'>
        <a
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </a>
      </div>
      <div className='cont1'>
        <div className='box1'>
          <h2 className='logo'>
            Animmix Studio <span>by Aziz Nazarqulov</span>
          </h2>
        </div>
        <div className='box2'>
          <a
            href='https://www.instagram.com/________legion_._._._/'
            target='_blank'
          >
            <FontAwesomeIcon icon={['fab', 'instagram']} size='2x' />
          </a>
          <a
            href='https://www.youtube.com/channel/UCh_hZ2kei-rEgiqOwDN-PJQ'
            target='_blank'
          >
            <FontAwesomeIcon icon={['fab', 'youtube']} size='2x' />
          </a>
          <a href='https://tiktok.com' target='_blank'>
            <FontAwesomeIcon icon={['fab', 'tiktok']} size='2x' />
          </a>
          <a href='https://artstation.com' target='_blank'>
            <FontAwesomeIcon icon={['fab', 'artstation']} size='2x' />
          </a>
          <a href='https://t.me/curious_behruz' target='_blank'>
            <FontAwesomeIcon icon={['fab', 'telegram']} size='2x' />
          </a>
        </div>
      </div>
      <div className='cont2'>
        <p>
          Developed by <a href='#'>Behruz Berdiyev</a> | 2021
        </p>
      </div>
    </FooterStyled>
  );
};

//styled components
const FooterStyled = styled.div`
  background-color: #0096bb;
  .topper {
    display: grid;
    place-content: center;
    padding: 0.5rem 10rem;
    a {
      color: #222222;
      text-decoration: none;
      cursor: pointer;
    }
  }
  .cont1 {
    background-color: #0184a5;
    padding: 1rem 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .box1 {
      .logo {
        font-size: 1.5rem;
        font-family: 'Zen Dots', cursive;
        font-weight: lighter;
        span {
          display: block;
          font-size: 1rem;
          font-weight: 300;
          color: #080808;
        }
      }
    }
    .box2 {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: auto;
      a {
        color: #080808;
        text-decoration: none;
        margin-left: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 3.7rem;
        width: 3.7rem;
        border-radius: 50%;
        transition: all 0.5s ease;
        &:hover {
          background: #080808;
          color: white;
          box-shadow: 0px 0px 20px #e9e9e9;
        }
      }
    }
    @media (max-width: 1200px) {
      padding: 1rem 5rem;
    }
    @media (max-width: 650px) {
      flex-direction: column;
      .box1,
      .box2 {
        padding: 1rem 0rem;
      }
      .logo {
        span {
          text-align: center !important;
        }
      }
    }
  }
  .cont2 {
    background: #007a99;
    padding: 1rem 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-size: 1rem;
      padding: 0;
      color: #080808;
      text-align: center;
      a {
        color: #000000;
        font-weight: 600;
        text-decoration: none;
      }
    }
  }
`;

export default Footer;
