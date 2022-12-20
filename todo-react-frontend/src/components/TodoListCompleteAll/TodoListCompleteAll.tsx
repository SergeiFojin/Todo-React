import React from 'react';
import cn from 'classnames';
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
    <S.TodoListCompleteWrap>
      <S.TodoListCompleteAll
        className={cn({ allCompleted: todos.findIndex((item) => !item.isCompleted) === -1 })}
        onClick={completeAllTodo}
      >
        <S.TodoListCompleteAllImg
          src="./source/checkAll.png"
          alt="checkAll.png"
        />
      </S.TodoListCompleteAll>
    </S.TodoListCompleteWrap>
  );
};

export default TodoListCompleteAll;
