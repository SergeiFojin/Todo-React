import styled from 'styled-components';
import { colors } from '../../colors';

export const TodoListFooter = styled.div`
  width: 100%;
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  
  .notVisible{display: none};
`;

export const TodoListFooterLeft = styled.p`
  padding: 5px;
  font-size: 14px;
  color: ${colors.dimgray};
  font-family: Arial;
`;

export const TodoListFooterButtons = styled.div`
  justify-self: center;
`;

export const TodoListFooterButton = styled.button`
  border: none;
  padding: 5px 10px;
  background-color: ${colors.white};
  font-size: 14px;
  color: ${colors.dimgray};
  font-family: Arial;
  cursor: pointer;
  
  &:not(:first-child) {
    margin-left: 10px;
  }
  
  &:hover {
    border: 1px solid ${colors.footerButtonHover};
    border-radius: 3px;
    padding: 4px 9px;
  }
  
  &:focus {
    border: 1px solid ${colors.footerButtonFocus};
    border-radius: 3px;
    padding: 4px 9px;
  }
`;

export const TodoListFooterClear = styled(TodoListFooterButton)`
  justify-self: end;
  &:hover {
    border: 1px solid ${colors.white};
    text-decoration: underline;
  }
`;
