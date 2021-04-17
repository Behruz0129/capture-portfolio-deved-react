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

const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  //UseEffect
  useEffect(() => {
    const currentMovie = movies.filter(stateMovie => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);
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
    </>
  );
};

const Details = styled(motion.div)`
  color: white;
`;

const Headline = styled.div`
  width: 100%;
  min-height: 15vh;
  font-size: 1.5rem;
  display: grid;
  place-content: center;
  margin: auto;
  padding: 1rem 10rem;
  background-color: #242424;
  margin-bottom: 2rem;
`;

const Block = styled.div`
  min-height: 60vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0rem 8rem;
`;
const Image = styled.div`
  img {
    display: grid;
    place-content: center;
    width: 100%;
    height: 100%;
    object-fit: cover;
    padding: 2rem;
  }
`;
const Description = styled.div`
  padding: 3rem;
  .line {
    width: 80%;
    height: 0.5rem;
    background: #23d997;
    margin: 1rem 0;
  }
  p {
    width: 90%;
    word-wrap: break-word;
  }
`;

export default MovieDetail;
