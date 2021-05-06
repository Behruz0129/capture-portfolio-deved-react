//import styled
import { About, Description, Image } from '../styles';
import styled from 'styled-components';
//import images
import icon1 from '../img/fast.svg';
import icon2 from '../img/teamwork.svg';
import icon3 from '../img/experience.svg';
import icon4 from '../img/money.svg';
import home2 from '../img/home1.jpg';
//scroll animations
import { scrollSection } from '../animation';
import { useScroll } from './useScroll';

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      ref={element}
      variants={scrollSection}
      initial='hidden'
      animate={controls}
    >
      <Description>
        <h2>
          My <span>personal</span> skills
        </h2>
        <Cards>
          <Card>
            <div className='icon'>
              <img src={icon1} alt='clock' />
              <h3>Efficient</h3>
            </div>
            <p>
              I know "how to work faster?" tricks and i usually work very fast
            </p>
          </Card>
          <Card>
            <div className='icon'>
              <img src={icon2} alt='teamwork' />
              <h3>Teamwork</h3>
            </div>
            <p>If i have nice team, i work awesome together</p>
          </Card>
          <Card>
            <div className='icon'>
              <img src={icon3} alt='diaphragm' />
              <h3>Experience</h3>
            </div>
            <p>I made a lot of projects and i have some experience</p>
          </Card>
          <Card>
            <div className='icon'>
              <img src={icon4} alt='affordable' />
              <h3>Affordable</h3>
            </div>
            <p>I made projects very affordable. Contact us</p>
          </Card>
        </Cards>
      </Description>
      <ServicesImage>
        <img src={home2} alt='Nazarqulov Aziz' />
      </ServicesImage>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem;
  }
  @media (max-width: 1200px) {
    padding: 5rem;
  } ;
`;

const ServicesImage = styled(Image)`
  @media (max-width: 1050px) {
    display: none;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  .icon {
    display: flex;
    align-items: center;
    img {
      width: 70px;
    }
    h3 {
      margin-left: 2rem;
      background: white;
      color: black;
      padding: 1rem;
      @media (max-width: 600px) {
        display: none;
      }
    }
  }
  p {
    padding: 3rem 0rem;
    margin-right: 0rem;
    width: 80%;
  }
  @media (max-width: 800px) {
    width: 100%;
    flex-direction: row;
    .icon {
      padding-right: 5rem;
    }
  }
  @media (max-width: 400px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .icon {
      padding: 0;
    }
  }
`;

export default ServicesSection;
