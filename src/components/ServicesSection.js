//import images
import icon1 from '../img/clock.svg';
import icon2 from '../img/teamwork.svg';
import icon3 from '../img/diaphragm.svg';
import icon4 from '../img/money.svg';
import home2 from '../img/home2.png';

const ServicesSection = () => {
  return (
    <div className='services'>
      <div className='description'>
        <h2>
          High <span>quality</span> services
        </h2>
        <div className='cards'>
          <div className='card'>
            <div className='icon'>
              <img src={icon1} alt='clock' />
              <h3>Efficient</h3>
            </div>
            <p>
              I know "how to work faster?" tricks and i usually work very fast
            </p>
          </div>
          <div className='card'>
            <div className='icon'>
              <img src={icon2} alt='teamwork' />
              <h3>Teamwork</h3>
            </div>
            <p>I can work with team very nice</p>
          </div>
          <div className='card'>
            <div className='icon'>
              <img src={icon3} alt='diaphragm' />
              <h3>Experience</h3>
            </div>
            <p>I have much much experience. I worked with a lot of projects</p>
          </div>
          <div className='card'>
            <div className='icon'>
              <img src={icon4} alt='affordable' />
              <h3>Affordable</h3>
            </div>
            <p>300-400$/month</p>
          </div>
        </div>
      </div>
      <div className='image'>
        <img src={home2} alt='Nazarqulov Aziz' />
      </div>
    </div>
  );
};

export default ServicesSection;
