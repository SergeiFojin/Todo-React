import styled from "styled-components";
import { colors } from "../../colors";

export const TodoListCompleteWrap = styled.div`
  display: flex;
  align-items: center;

  .allCompleted {
    opacity: 0.6;
  }
`;

export const TodoListCompleteAll = styled.button`
  width: 11px;
  height: 23px;
  border: none;
  background-color: ${colors.white};
  transform: rotate(90deg);
  opacity: 0.1;
  margin: 0px 10px;
`;

export const TodoListCompleteAllImg = styled.img`
  width: 100%;
  height: 100%;
`;
