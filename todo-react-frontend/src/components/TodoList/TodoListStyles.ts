import styled from 'styled-components';
import { colors } from '../../colors';

export const TodoListWrap = styled.div`
  width: 100%;
  box-shadow: 1px 1px 3px ${colors.darkgray};
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
`;

export const TodoList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
