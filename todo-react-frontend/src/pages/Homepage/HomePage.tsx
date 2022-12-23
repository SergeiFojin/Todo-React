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

const HomePage = () => {
  const dispatch = useAppDispatch();
  const isLoading: string = useAppSelector((state) => state.fetchReducer.status);
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
        isLoading === FetchStatusEnum.LOADING
          ? <Loader />
          : <TodoList />
      }
    </S.Body>
  );
};

export default HomePage;
