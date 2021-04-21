//import styled
import { About, Description, Image, Hide } from '../styles';
//import images
import home1 from '../img/home2.jpg';
//Framer motion
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../animation';
//import images
import Wave from './Wave';

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>I work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>3D models, ads,</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              <span> animations</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>and other</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          My name is Aziz. I'm <span>3D modeler.</span>
          <br /> I can work for you or your buisness
        </motion.p>
        <div>
          <motion.button variants={fade} className='greem'>
            Hire Me
          </motion.button>
          <motion.button variants={fade}>Resume</motion.button>
        </div>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt='Nazarqulov Aziz' />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
