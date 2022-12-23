import React from 'react';
import * as S from './ErrorMessageStyles';
import { useAppSelector } from '../../store/hooks';

const ErrorMessage = () => {
  const fetchStatus: string = useAppSelector((state) => state.todoReducer.errorMessage);
  return (
    <S.ErrorMessage>
      {fetchStatus}
    </S.ErrorMessage>
  );
};

export default ErrorMessage;
