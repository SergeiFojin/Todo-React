import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import * as S from './Homepage';
import { useAppDispatch } from '../../store/hooks';
import { getTodosSaga } from '../../store/sagas/actions';
import TodoInput from '../../components/input/TodoInput';
import TodoList from '../../components/TodoList/TodoList';
import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getTodosSaga());
  }, [dispatch]);

  return (
    <S.Body>
      <LanguageSwitcher />
      <S.Header>{t('header')}</S.Header>
      <TodoInput />
      <TodoList />
    </S.Body>
  );
};

export default HomePage;
