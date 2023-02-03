import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background: url('/images/bg-wrapper.jpg') rgba(51, 51, 51, 0.7);
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: multiply;
  background-position: top center;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  button {
    height: 40px;
    border-radius: 4px;
    cursor: pointer;
    background-color: #93704d;
    color: white;
    font-weight: 700;
    border: 2px solid white;
    margin-top: 16px;

    transition: background-color 1s;

    &:hover {
      filter: brightness(0.95);
    }
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;

  background: url('/images/bg-content.jpg') rgba(51, 51, 51, 0.3);
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
  padding: 24px;
  border-radius: 4px;

  h1 {
    font-size: 32px;
    text-align: center;
    background-color: #93704d;
    color: #fff;
    padding: 8px;
    rotate: -1deg;
    margin-bottom: 32px;
  }

  & > label {
    text-align: start;
    margin-bottom: 8px;
  }

  input[type='text'],
  select {
    width: 100%;
    height: 40px;
    border-radius: 4px;
    padding: 8px;
    margin-bottom: 20px;
  }
`;

export const RadioItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-bottom: 8px;
  gap: 8px;
`;

export const Copywright = styled.p`
  margin-top: 16px;
`;
