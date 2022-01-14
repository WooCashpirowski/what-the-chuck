import React, { useContext } from 'react';
import styled from 'styled-components';
import { JokesContext } from '../context';
import { getGradient } from '../gradients';

const Wrapper = styled.div`
  padding-top: 5rem;
  background: ${getGradient};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  button {
    position: absolute;
    top: 5rem;
    right: 2rem;
    padding: 1rem;
    border-radius: 2rem;
    cursor: pointer;
    font-family: inherit;
    color: #fff;
    background: linear-gradient(315deg, #2b4162 0%, #000000 74%);
    &:hover {
      background: linear-gradient(315deg, #000000 0%, #2b4162 74%);
    }
  }
  h1 {
    color: white;
    margin-bottom: 1rem;
  }
  img {
    height: 80%;
  }
  @media (max-width: 600px) {
    h1 {
      font-size: 1.5rem;
      margin-bottom: 0;
      margin-top: 4rem;
    }
  }
`;

const Home = () => {
  const { resetAll } = useContext(JokesContext);
  return (
    <Wrapper>
      <button onClick={resetAll}>Kill All Jokes</button>
      <h1>Chuck Norris Jokes App</h1>
      <img src="/img/chuck.png" />;
    </Wrapper>
  );
};

export default Home;
