import styled from 'styled-components';
import { colors } from '../../colors';

export const InputWrap = styled.div`
  width: 100%;
  background-color: ${colors.white};
  padding: 16px;
  box-shadow: 1px 1px 3px ${colors.darkgray};
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

export const InputBody = styled.input`
  padding-left: 18px;
  width: 100%;
  border: none;
  font-size: 24px;
  font-weight: 100;
  color: ${colors.dimgray};
  outline: none;
  
  &::placeholder {
    color: ${colors.lightgray};
    font-style: italic;
  }
`;

export const AddButtonWrap = styled.div`
`;

export const AddButton = styled.button`
  background-color: ${colors.white};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AddButtonImg = styled.img` 
  width: 25px;
  opacity: 0.3;

  &:hover {
    opacity: 0.5;
  }
`;
