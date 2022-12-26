import styled from 'styled-components';
import { colors } from '../../colors';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Body = styled.div`
  width: 30%;
  margin-top: 160px;
  padding: 10px 0px 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 15px;
`;

export const Header = styled.div`
  font-size: 64px;
  line-height: 66px;
  color: ${colors.headerColor};
  font-family: Arial;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: 70%;
`;

export const InputBody = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 5px;
  border: 1px solid ${colors.headerColor};
  border-radius: 5px;
  background-color: ${colors.white};

  &:not(:first-child) {
    margin-top: 10px;
  }
`;

export const InputIcon = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  background-color: ${colors.white};
`;

export const InputIconImg = styled.img`
  width: 100%;
  opacity: 0.5;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 16px;
  font-weight: 100;
  color: ${colors.dimgray};
  background-color: ${colors.white};
  border: none;
  outline: none;
  margin-left: 10px;
  padding: 4px;

  &::placeholder {
    color: ${colors.lightgray};
  }
`;

export const InputSubmit = styled.button`
  width: 100%;
  margin-top: 40px;
  border: 1px solid ${colors.headerColor};
  border-radius: 5px;
  background-color: ${colors.headerColor};
  padding: 9px;
  font-size: 16px;
  color: ${colors.white};
  cursor: pointer;
  
  &:hover {
    transform: scale(1.05);
  }
  
  &:disabled {
    cursor: auto;
    opacity: 0.5;
    &:hover {
      transform: none;
    }
  }
`;

export const InputError = styled.div`
  padding: 5px;
  color: ${colors.headerColor};
  align-self: start;
`;
