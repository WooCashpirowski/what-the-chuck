import styled from 'styled-components';

const RippleWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const Ripple = styled.div`
  display: inline-block;
  position: relative;
  width: 160px;
  height: 160px;
  div {
    position: absolute;
    border: 4px solid #fff;
    opacity: 1;
    border-radius: 50%;
    animation: ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
`;

import React from 'react';

const Loader = () => {
  return (
    <RippleWrapper>
      <Ripple>
        <div></div>
        <div></div>
      </Ripple>
    </RippleWrapper>
  );
};

export default Loader;
