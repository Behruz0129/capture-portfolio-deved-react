//import hooks
import { useState, useEffect } from 'react';
//styled
import styled from 'styled-components';
//react router
import { useHistory } from 'react-router-dom';
import { MovieState } from '../movieState';
//Framer motion
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import { ScrollTop } from '../components/ScrollTop';

const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  //UseEffect
  useEffect(() => {
    const currentMovie = movies.filter(stateMovie => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);
  window.scrollTo(0, 0);
  return (
    <>
      {movie && (
        <Details
          exit='exit'
          variants={pageAnimation}
          initial='hidden'
          animate='show'
        >
          <Headline>
            <h1>{movie.name}</h1>
          </Headline>
          <Block>
            <Image>
              <img src={movie.mainImg} alt='main img' />
            </Image>
            <Description>
              <h1>{movie.awards[0].title}</h1>
              <div className='line'></div>
              <p>{movie.awards[0].description}</p>
            </Description>
          </Block>
          <Block>
            <Description>
              <h1>{movie.awards[1].title}</h1>
              <div className='line'></div>
              <p>{movie.awards[1].description}</p>
            </Description>
            <Image>
              <img src={movie.secondaryImg} alt='secondary img' />
            </Image>
          </Block>
        </Details>
      )}
      <ScrollTop />
    </>
  );
};

const Details = styled(motion.div)`
  color: white;
  padding-top: 5rem;
`;

const Headline = styled.div`
  width: 100%;
  min-height: 15vh;
  font-size: 1.5rem;
  display: grid;
  place-content: center;
  margin: auto;
  padding: 1rem 10rem;
  margin-bottom: 2rem;
`;

const Block = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0rem 10rem;
  margin-bottom: 5rem;
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    margin-bottom: 0rem;
  }
  @media (max-width: 800px) {
    padding: 0rem 5rem;
  }
  @media (max-width: 500px) {
    padding: 0rem 2rem;
  }
`;
const Image = styled.div`
  img {
    display: grid;
    place-content: center;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 750px) {
    order: 1;
  }
`;
const Description = styled.div`
  padding: 3rem;
  .line {
    width: 80%;
    height: 0.5rem;
    background: #0096bb;
    margin: 1rem 0;
  }
  p {
    width: 90%;
    word-wrap: break-word;
  }
  @media (max-width: 750px) {
    order: 2;
    padding: 3rem 0;
  }
`;

export default MovieDetail;
