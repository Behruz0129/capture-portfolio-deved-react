import styled from 'styled-components';
//image
import errorImg from '../img/404_meme.jpeg';

const ErrorPage = () => {
  return (
    <Error>
      <img src={errorImg} alt='tony stark meme' />
    </Error>
  );
};

//styled

const Error = styled.div`
  padding: 10rem 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 300px;
  }
`;

export default ErrorPage;
