//import styled
import { About, Description, Image, Hide } from '../styles';
//import images
import home1 from '../img/home2.jpg';
//Framer motion
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2>I work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>3D models, ads,</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              <span> animations</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>and other</motion.h2>
          </Hide>
        </motion.div>
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
