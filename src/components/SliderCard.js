import styled from 'styled-components';

const CardWrapper = styled.div`
  padding: 1rem;
  text-align: center;
  width: 290px;
  height: 390px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: linear-gradient(to right, #2a2b2f, #222115);
  border: 2px solid #1e1f23;
  border-radius: 11px;
  box-shadow: 0 1.25rem 4rem rgba(0, 0, 0, 0.5);
  transition: 0.5s;
  position: relative;
  &:hover {
    transform: scale(1.5);
    box-shadow: 0 0.25rem 2rem rgba(0, 0, 0, 0.5);
  }
  p {
    pointer-events: none;
    line-height: 2rem;
    padding: 0.5rem;
    font-size: 1.25rem;
  }
`;

export default CardWrapper;
