import styled from 'styled-components';
import { colors } from '../../colors';

export const TodoListCompleteAll = styled.button<{checkComplete: number}>`
  width: 11px;
  height: 23px;
  border: none;
  background-color: ${colors.white};
  transform: rotate(90deg);
  opacity: ${(props) => (props.checkComplete === 0 ? 0.6 : 0.1)};
  margin: 0px 10px;
`;

export const TodoListCompleteAllImg = styled.img`
  width: 100%;
  height: 100%;
`;
