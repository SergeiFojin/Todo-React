import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import * as S from './Homepage';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getTodosSaga } from '../../store/sagas/actions';
import TodoInput from '../../components/input/TodoInput';
import TodoList from '../../components/TodoList/TodoList';
import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher';
import Loader from '../../components/Loader/Loader';
import { FetchStatusEnum } from '../../types/types';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const fetchStatus: string = useAppSelector((state) => state.todoReducer.requestStatus);
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getTodosSaga());
  }, [dispatch]);

  return (
    <S.Body>
      <LanguageSwitcher />
      <S.Header>{t('header')}</S.Header>
      <TodoInput />
      {
        fetchStatus === FetchStatusEnum.ERROR
        && <ErrorMessage />
      }
      {
        fetchStatus === FetchStatusEnum.LOADING
          ? <Loader />
          : <TodoList />
      }
    </S.Body>
  );
};

export default HomePage;
