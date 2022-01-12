import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getGradient } from '../gradients';

const CardWrapper = styled.div`
  margin: 0.5rem;
  background: #fff;
  max-width: 600px;
  min-width: 300px;
  min-height: 500px;
  margin: 0 auto;
  position: relative;
  div {
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    background: ${getGradient};
    h4 {
      color: #fff;
    }
  }
  p {
    padding: 2rem;
    font-size: 1.5rem;
    line-height: 2rem;
  }
  a {
    display: inline-block;
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    text-decoration: none;
    padding: 1rem;
    border: 2px solid #132626;
    color: #132626;
    text-align: center;
    transition: 0.3s;
    &:hover {
      color: #fff;
      background: ${getGradient};
    }
  }
  @media (max-width: 768px) {
    p {
      font-size: 1rem;
    }
  }
`;

const SwiperCard = ({ joke }) => {
  return (
    <CardWrapper>
      <div>
        <h4>{joke.updated_at.split(' ')[0]}</h4>
        <img src={joke.icon_url} />
      </div>
      <p>{joke.value}</p>
      <a href={joke.url} target="_blank" rel="noreferrer">
        View On CHUCKNORRIS.IO
      </a>
    </CardWrapper>
  );
};

export default SwiperCard;

SwiperCard.propTypes = {
  joke: PropTypes.object,
};
