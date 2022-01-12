import React from 'react';
import styled from 'styled-components';
import { getGradient } from '../gradients';

const Wrapper = styled.div`
  padding-top: 5rem;
  background-color: #000000;
  background-image: ${getGradient};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  h1 {
    color: white;
  }
  img {
    height: 80%;
    margin-top: 1rem;
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <h1>Chuck Norris Jokes App</h1>
      <img src="/img/chuck.png" />;
    </Wrapper>
  );
};

export default Home;
