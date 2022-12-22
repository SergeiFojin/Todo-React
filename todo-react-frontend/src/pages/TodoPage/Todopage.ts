import styled from 'styled-components';
import { colors } from '../../colors';

export const Body = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  font-size: 100px;
  line-height: 102px;
  color: ${colors.headerColor};
  font-family: Arial;
  text-align: center;
`;

export const SwitchLanguageWrap = styled.div`
`;

export const SwitchLanguageButton = styled.button`
  border: none;
  padding: 5px 10px;
  background-color: ${colors.whitesmoke};
  font-size: 14px;
  color: ${colors.dimgray};
  font-family: Arial;
  cursor: pointer;


  &:not(:first-child) {
    margin-left: 10px;
  }

  &:hover {
    border: 1px solid ${colors.footerButtonFocus};
    border-radius: 3px;
    padding: 4px 9px;
  }

  &:disabled {
    border: 1px solid ${colors.footerButtonFocus};
    border-radius: 3px;
    padding: 4px 9px;
    cursor: auto;
  }
`;

export const Todo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 16px;
  border: 1px solid ${colors.whitesmoke};
  background-color: ${colors.white};

  .completed {
    opacity: 0.5;
    text-decoration: line-through;
  }
`;

export const TodoComplete = styled.button`
  width: 36px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid ${colors.lightgray};
  background-color: ${colors.white};
  box-sizing: border-box;

  .notCompleted {
    opacity: 0;
  }
`;

export const TodoCompleteImg = styled.img`
  width: 100%;
  border-radius: 50%;
  padding: 5px;
  border: 1px solid ${colors.green};
`;

export const TodoInput = styled.input`
  width: 100%;
  font-size: 24px;
  font-weight: 100;
  color: ${colors.dimgray};
  background-color: ${colors.white};
  border: none;
  outline: none;
  margin-left: 20px;
`;

export const TodoBack = styled.button`
  padding: 5px;
  background-color: ${colors.white};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TodoBackImg = styled.img`
  width: 25px;
  opacity: 0.3;

  &:hover {
    opacity: 0.5;
  }
`;

export const TodoDeleteImg = styled.img`
  width: 15px;
  opacity: 0.3;

  &:hover {
    opacity: 0.7;
  }
`;
