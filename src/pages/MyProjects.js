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
import { ScrollTop } from '../components/ScrollTop';
//styled components
import styled from 'styled-components';
//import data
import movieState from '../movieState';
//react router
import { Link } from 'react-router-dom';
//import component
import MovieScroll from '../components/MovieScroll';

const MyProjects = () => {
  const datas = movieState();
  return (
    <Work variants={pageAnimation} exit='exit' initial='hidden' animate='show'>
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
      </motion.div>
      {/* First two elements */}
      <Wrap>
        <Movie>
          <h2>{datas[datas.length - 1].name}</h2>
          <motion.div variants={lineAnim} className='line'></motion.div>
          <Link to={datas[datas.length - 1].url}>
            <Hide>
              <motion.img
                variants={photoAnim}
                src={datas[datas.length - 1].mainImg}
                alt={datas[datas.length - 1].name}
              />
            </Hide>
          </Link>
        </Movie>
        <Movie>
          <h2>{datas[datas.length - 2].name}</h2>
          <motion.div variants={lineAnim} className='line'></motion.div>
          <Link to={datas[datas.length - 2].url}>
            <Hide>
              <motion.img
                variants={photoAnim}
                src={datas[datas.length - 2].mainImg}
                alt={datas[datas.length - 2].name}
              />
            </Hide>
          </Link>
        </Movie>
        {datas
          .slice(0, datas.length - 2)
          .reverse()
          .map(moviem => (
            <Movie key={moviem.id}>
              <motion.h2 variants={fade}>{moviem.name}</motion.h2>
              <motion.div variants={lineAnim} className='line'></motion.div>
              <Link to={moviem.url}>
                <Hide>
                  <motion.img
                    variants={photoAnim}
                    src={moviem.mainImg}
                    alt={moviem.name}
                  />
                </Hide>
              </Link>
            </Movie>
          ))}
      </Wrap>
      <ScrollTop />
    </Work>
  );
};

//styled

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  background: white;
  padding: 10rem;
  h2 {
    padding: 1rem 0rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  @media (max-width: 1200px) {
    padding: 10rem 5rem;
  }
`;

const Wrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5rem;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const Hide = styled.div`
  overflow: hidden;
  img {
    box-shadow: 0 0 10px #ccc;
  }
`;

const Movie = styled(MovieScroll)``;

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0%;
  width: 100%;
  height: 40vh;
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
