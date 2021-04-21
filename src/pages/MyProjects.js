//styled
import styled from 'styled-components';
//react router
import { Link } from 'react-router-dom';
//import images
import paint1 from '../img/projects/paint1.gif';
import complex1 from '../img/projects/complex1.gif';
import kingston1 from '../img/projects/kingston1.png';
import firework1 from '../img/projects/firework1.gif';
import grass1 from '../img/projects/grass1.jpg';
//Framer motion
import { motion } from 'framer-motion';
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  slider,
  sliderContainer,
} from '../animation';

const MyProjects = () => {
  window.scrollTo(0, 0);
  return (
    <Work variants={pageAnimation} exit='exit' initial='hidden' animate='show'>
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
      </motion.div>
      <Movie>
        <motion.h2 variants={fade}>Worn Paint</motion.h2>
        <motion.div variants={lineAnim} className='line'></motion.div>
        <Link to='/projects/worn-paint'>
          <Hide>
            <motion.img variants={photoAnim} src={paint1} alt='worn paint' />
          </Hide>
        </Link>
      </Movie>
      <Movie>
        <motion.h2 variants={fade}>Complex Shapes</motion.h2>
        <motion.div variants={lineAnim} className='line'></motion.div>
        <Link to='/projects/complex-shapes'>
          <Hide>
            <motion.img variants={photoAnim} src={complex1} alt='complex' />
          </Hide>
        </Link>
      </Movie>
      <Movie>
        <h2>Kingston Logo</h2>
        <div className='line'></div>
        <Link to='/projects/kingston-logo'>
          <img src={kingston1} alt='kingston 3d logo' />
        </Link>
      </Movie>
      <Movie>
        <h2>Firework</h2>
        <div className='line'></div>
        <Link to='/projects/firework-animation'>
          <img src={firework1} alt='firework' />
        </Link>
      </Movie>
      <Movie>
        <h2>Grass</h2>
        <div className='line'></div>
        <Link to='/projects/grass'>
          <img src={grass1} alt='grass' />
        </Link>
      </Movie>
    </Work>
  );
};

//styled components
const Work = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  overflow: hidden;
  background: white;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;
const Movie = styled.div`
  padding-bottom: 5rem;
  width: 45%;
  display: inline-block;
  .line {
    height: 0.5rem;
    background: #0096bb;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 30vh;
  background-color: #0096bb;
  z-index: 1000;
`;

const Frame2 = styled(Frame1)`
  top: 40%;
  background-color: #009cc4;
`;
const Frame3 = styled(Frame1)`
  top: 70%;
  background-color: #00b8e6;
`;

export default MyProjects;
