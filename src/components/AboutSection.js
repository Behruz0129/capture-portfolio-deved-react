//import styled
import { About, Description, Image, Hide } from '../styles';
//import images
import home1 from '../img/home1.png';

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className='title'>
          <Hide>
            <h2>I work to make</h2>
          </Hide>
          <Hide>
            <h2>
              3D models, ads,<span> animations</span>
            </h2>
          </Hide>
          <Hide>
            <h2>and other</h2>
          </Hide>
        </div>
        <p>
          My name is Aziz. I'm <span>3D modeler.</span>
          <br /> I can work for you or your buisness
        </p>
        <div>
          <button className='greem'>Hire Me</button>
          <button>Resume</button>
        </div>
      </Description>
      <Image>
        <img src={home1} alt='Nazarqulov Aziz' />
      </Image>
    </About>
  );
};

export default AboutSection;
