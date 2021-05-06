//import router
import { Link } from 'react-router-dom';
//import styled
import { About, Description, Image, Hide } from '../styles';
//import images
import home1 from '../img/home2.jpg';
//Framer motion
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../animation';
//import images
import Wave from './Wave';
//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const AboutSection = () => {
  return (
    <About style={{ paddingTop: '10rem' }}>
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
          <Link to='/contact'>
            <motion.button variants={fade} className='greem'>
              <FontAwesomeIcon icon={faEnvelope} size='1x' /> Hire Me
            </motion.button>
          </Link>
          <a
            href='https://drive.google.com/file/d/18mDlGGX3LES49PmeFTSm82N6Jycg_sEU/view?usp=sharing'
            target='_blank'
            rel='noreferrer'
          >
            <motion.button variants={fade}>
              <FontAwesomeIcon icon={faDownload} size='1x' /> Resume
            </motion.button>
          </a>
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
