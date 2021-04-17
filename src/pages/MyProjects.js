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
import { pageAnimation } from '../animation';

const MyProjects = () => {
  return (
    <Work variants={pageAnimation} exit='exit' initial='hidden' animate='show'>
      <Movie>
        <h2>Worn Paint</h2>
        <div className='line'></div>
        <Link to='/projects/worn-paint'>
          <img src={paint1} alt='worn paint' />
        </Link>
      </Movie>
      <Movie>
        <h2>Complex Shapes</h2>
        <div className='line'></div>
        <Link to='/projects/complex-shapes'>
          <img src={complex1} alt='complex' />
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
    background: #ccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
  }
`;

export default MyProjects;
