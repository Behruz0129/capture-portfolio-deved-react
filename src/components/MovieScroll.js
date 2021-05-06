//styled components
import styled from 'styled-components';
//use scroll
import { useScroll } from '../components/useScroll';
import { fade } from '../animation';
import { motion } from 'framer-motion';

const MovieScroll = ({ children }) => {
  const [element, controls] = useScroll();
  return (
    <Movie ref={element} variants={fade} initial='hidden' animate={controls}>
      {children}
    </Movie>
  );
};

//styled

const Movie = styled(motion.div)`
  width: 100%;
  display: inline-block;
  transition: 0.5s ease all;
  &:hover {
    transform: scale(1.05);
  }
  .line {
    height: 0.5rem;
    background: #0096bb;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 20rem;
    object-fit: cover;
  }
`;

export default MovieScroll;
