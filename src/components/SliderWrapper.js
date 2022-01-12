import styled from 'styled-components';

export default styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(to right, #232427, #222115);
  .swiper {
    width: 100%;
    height: 80%;
    margin: 0 auto;
  }
  .swiper-slide {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }
  &::after {
    content: '';
    position: absolute;
    width: 320px;
    height: 420px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
    pointer-events: none;
    border-radius: 15px;
    box-shadow: inset 0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 0.2),
      inset -0.25rem -0.25rem 1rem rgba(255, 255, 255, 0.1),
      0.25rem 0.25rem 1rem rgba(0, 0, 0, 0.3),
      -0.25rem -0.25rem 1rem rgba(255, 255, 255, 0.1);
  }
`;
