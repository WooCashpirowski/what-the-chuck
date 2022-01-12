import styled from 'styled-components';

export default styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(max(320px, 100%/5), 1fr));
  background: #232526;
  justify-items: center;
  background: linear-gradient(to top, #c94b4b, #4b134f);
  padding: 4rem 2rem 2rem;
  min-height: 100vh;
  position: relative;
  margin: 0 auto;
  z-index: 0;
  &::before,
  &::after {
    z-index: -1;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  &::before {
    background: linear-gradient(to right, #f12711, #f5af19);
    clip-path: circle(25% at left 75%);
  }
  &::after {
    background: linear-gradient(to top, #8a2387, #e94057, #f27121);
    clip-path: circle(15% at right 5%);
  }
`;
