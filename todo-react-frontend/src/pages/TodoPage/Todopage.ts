import styled from 'styled-components';

export const Body = styled.div`
  width: 550px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  font-size: 100px;
  line-height: 102px;
  color: #e1cbce;
  font-family: Arial;
`;

export const Todo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 16px;
  border: 1px solid whitesmoke;
  background-color: white;
`;

export const TodoComplete = styled.button`
  width: 36px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid lightgray;
  background-color: white;
  box-sizing: border-box;
`;

export const TodoCompleteImg = styled.img<{isCompleted: boolean}>`
  width: 100%;
  border-radius: 50%;
  padding: 5px;
  border: 1px solid green;
  opacity: ${(props) => (props.isCompleted ? '1' : '0')};
`;

export const TodoInput = styled.input<{isCompleted: boolean}>`
  width: 100%;
  font-size: 24px;
  font-weight: 100;
  color: dimgray;
  background-color: white;
  border: none;
  outline: none;
  margin-left: 20px;
  text-decoration: ${(props) => (props.isCompleted ? 'line-through' : 'none')};
  opacity: ${(props) => (props.isCompleted ? '0.5' : '1')};
`;

export const TodoBack = styled.button`
  padding: 5px;
  background-color: white;
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
