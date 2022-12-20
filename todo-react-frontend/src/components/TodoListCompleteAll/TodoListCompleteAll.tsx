import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import * as S from './TodoListCompleteAllStyles';
import { completeAllTodoSaga } from '../../store/sagas/actions';
import { Todo } from '../../types/types';

const TodoListCompleteAll = () => {
  const dispatch = useAppDispatch();
  const todos: Todo[] = useAppSelector((state) => state.todos);

  if (todos.length === 0) {
    return null;
  }

  const completeAllTodo = () => {
    const completeCheck = todos.length === todos.filter((item) => item.isCompleted).length ? 'false' : 'true';
    dispatch(completeAllTodoSaga(completeCheck));
  };

  return (
    <S.TodoListCompleteAll
      checkComplete={todos.filter((item) => !item.isCompleted).length}
      onClick={completeAllTodo}
    >
      <S.TodoListCompleteAllImg
        src="./source/checkAll.png"
        alt="checkAll.png"
      />
    </S.TodoListCompleteAll>
  );
};

export default TodoListCompleteAll;
