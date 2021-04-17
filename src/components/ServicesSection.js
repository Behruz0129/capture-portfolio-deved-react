//import styled
import { About, Description, Image, Hide } from '../styles';
import styled from 'styled-components';
//import images
import icon1 from '../img/clock.svg';
import icon2 from '../img/teamwork.svg';
import icon3 from '../img/diaphragm.svg';
import icon4 from '../img/money.svg';
import home2 from '../img/home1.jpg';

const ServicesSection = () => {
  return (
    <Services>
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
      <Image>
        <img src={home2} alt='Nazarqulov Aziz' />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  background: #1a1a1a;
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 2rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
  p {
    padding: 3rem 0rem;
    margin-right: 0rem;
  }
`;

export default ServicesSection;
