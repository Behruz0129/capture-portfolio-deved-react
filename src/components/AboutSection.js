//import images
import home1 from '../img/home1.png';

const AboutSection = () => {
  return (
    <div>
      <div className='description'>
        <div className='title'>
          <div className='hide'>
            <h2>I work to make</h2>
          </div>
          <div className='hide'>
            <h2>
              3D models, ads,<span> animations</span>
            </h2>
          </div>
          <div className='hide'>
            <h2>and other</h2>
          </div>
        </div>
        <p>
          My name is Aziz. I'm <span>3D modeler</span>. I can work for you or
          your buisness
        </p>
        <div>
          <button>Hire Me</button>
          <button>Resume</button>
        </div>
      </div>
      <div className='image'>
        <img src={home1} alt='Nazarqulov Aziz' />
      </div>
    </div>
  );
};

export default AboutSection;
