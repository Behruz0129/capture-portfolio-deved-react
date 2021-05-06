import styled from 'styled-components';
import { motion } from 'framer-motion';

export const About = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 10rem;
  color: white;
  position: relative;
  @media (max-height: 800px) {
    min-height: 90vh;
  }
  @media (max-width: 1200px) {
    padding: 5rem;
  }
`;
export const Description = styled.div`
  flex: 1.3;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1000px) {
    flex: 1.1;
  }
  @media (max-width: 700px) {
    text-align: center;
    padding: 0;
  }
`;
export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 30rem;
    object-fit: cover;
  }
  @media (max-width: 1000px) {
    img {
      height: 30rem;
    }
  }
  @media (max-width: 800px) {
    flex: 0.5;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;
export const Hide = styled.div`
  overflow: hidden;
`;
