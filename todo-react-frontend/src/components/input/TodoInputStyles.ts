import styled from 'styled-components';

export const InputWrap = styled.div`
  width: 100%;
  background-color: white;
  padding: 16px 16px 16px 60px;
  box-shadow: 1px 1px 3px darkgray;
  margin-top: 10px;
`;

export const InputBody = styled.input`
  width: 100%;
  border: none;
  font-size: 24px;
  font-weight: 100;
  color: dimgray;
  outline: none;
  &::placeholder {
    color: lightgray;
    font-style: italic;
  }
`;
