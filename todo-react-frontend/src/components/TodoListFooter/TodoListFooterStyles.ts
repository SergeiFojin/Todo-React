import styled from 'styled-components';

export const TodoListFooter = styled.div`
  width: 100%;
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
`;

export const TodoListFooterLeft = styled.p`
  padding: 5px;
  font-size: 14px;
  color: dimgray;
  font-family: Arial;
`;

export const TodoListFooterButtons = styled.div`
`;

export const TodoListFooterButton = styled.button`
  margin-left: 10px;
  border: none;
  padding: 5px 10px;
  background-color: white;
  font-size: 14px;
  color: dimgray;
  font-family: Arial;
  cursor: pointer;
  &:hover {
    border: 1px solid #fae7eb;
    border-radius: 3px;
    margin: -1px -1px -1px 9px;
  }
  &:focus {
    border: 1px solid #e1c9cc;
    border-radius: 3px;
    margin: -1px -1px -1px 9px;
  }
`;

export const TodoListFooterClear = styled(TodoListFooterButton)<{checkCompleted: boolean}>`
  display: ${(props) => (props.checkCompleted ? 'inline-flex' : 'none')};
  &:hover {
    border: 1px solid white;
    text-decoration: underline;
  }
`;
