import styled from 'styled-components';

export const FloatingLabel = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 14px 12px 20px 9px;
  > input {
    width: 300px;
    height: 40px;
    margin: 14px 0 0 7px;
    outline: 0;
    border: none;
    border-bottom: 1px solid #ddd;
    background: #fff;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
  }
  > label {
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    padding: 0 12px;
    color: #999;
    pointer-events: none;
    position: absolute;
    transform: translate(0, 28px) scale(1);
    transform-origin: top left;
    transition: all 0.2s ease-out;
  }
  &:focus-within label {
    transform: translate(0, 12px) scale(0.75);
  }
  & .active {
    transform: translate(0, 12px) scale(0.75);
  }

  & .hasError {
    border-bottom: 1px solid red;
  }
`;
