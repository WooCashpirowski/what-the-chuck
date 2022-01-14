import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getChuck } from '../chucks';

const CardWrapper = styled.div`
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 315px;
  height: 420px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(5px);
  color: #fff;
  overflow: hidden;
  .header {
    padding: 1rem;
    border-radius: 15px 15px 0 0;
    display: flex;
    justify-content: flex-end;
    position: relative;
    overflow: hidden;
    h1 {
      color: #4b134f;
      opacity: 0.3;
      font-weight: 900;
      font-size: 3rem;
      position: absolute;
      z-index: 0;
      top: -10%;
      left: 0;
      pointer-events: none;
    }
    .image {
      width: 96px;
      height: 96px;
      overflow: hidden;
      border-radius: 50%;
      opacity: 0.3;
      transition: 0.3s;
    }
    img {
      z-index: 1;
      object-fit: cover;
      height: 100%;
    }
  }
  .content {
    padding: 1rem;
    display: flex;
    height: 70%;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    transform: translateY(50%);
    opacity: 0.1;
    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    p {
      line-height: 1.5rem;
    }
    a {
      display: inline-block;
      text-decoration: none;
      padding: 1rem;
      border-radius: 30px;
      color: #4b134f;
      background: rgba(255, 255, 255, 0.5);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      border-top: 1px solid rgba(255, 255, 255, 0.3);
      border-left: 1px solid rgba(255, 255, 255, 0.3);
      transition: 0.3s;
      &:hover {
        background: rgba(255, 255, 255, 0.8);
      }
    }
  }
  &:hover {
    .header {
      .image {
        opacity: 0.75;
      }
    }
    .content {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const GridCard = ({ joke }) => {
  return (
    <CardWrapper>
      <div className="header">
        <h1>{joke.updated_at.split(' ')[0]}</h1>
        <div className="image">
          <img src={getChuck()} />
        </div>
      </div>
      <div className="content">
        <p>{joke.value}</p>
        <a href={joke.url} target="_blank" rel="noreferrer">
          View On CHUCKNORRIS.IO
        </a>
      </div>
    </CardWrapper>
  );
};

export default GridCard;

GridCard.propTypes = {
  joke: PropTypes.object,
};
