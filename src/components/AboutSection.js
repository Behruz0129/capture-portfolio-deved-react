//import styled
import styled from 'styled-components';
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
          My name is Aziz. I'm <span>3D modeler</span>. I can work for you or
          your buisness
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

//styled components
const About = styled.div`
  min-height: 90vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 10rem;
  color: white;
`;
const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;
const Image = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
