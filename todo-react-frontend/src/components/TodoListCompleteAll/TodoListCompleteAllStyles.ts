import styled from 'styled-components';

export const TodoListCompleteAll = styled.button<{checkComplete: number}>`
  position: absolute;
  margin: -38px 0px 0px 25px;
  width: 11px;
  height: 23px;
  border: none;
  background-color: white;
  transform: rotate(90deg);
  opacity: ${(props) => (props.checkComplete === 0 ? 0.6 : 0.1)};
`;

export const TodoListCompleteAllImg = styled.img`
  width: 100%;
  height: 100%;
`;
