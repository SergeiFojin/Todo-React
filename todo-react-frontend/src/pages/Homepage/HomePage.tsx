import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import * as S from './Homepage';
import { useAppDispatch } from '../../store/hooks';
import { getTodosSaga } from '../../store/sagas/actions';
import TodoInput from '../../components/input/TodoInput';
import TodoList from '../../components/TodoList/TodoList';
import { languagesType } from '../../types/types';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { t, i18n } = useTranslation();

  const languages: languagesType = {
    en: { nativeName: 'English' },
    ru: { nativeName: 'Russian' },
  };

  useEffect(() => {
    dispatch(getTodosSaga());
  }, [dispatch]);

  return (
    <S.Body>
      <S.SwitchLanguageWrap>
        {Object.keys(languages).map((lng) => (
          <S.SwitchLanguageButton
            type="submit"
            key={lng}
            onClick={() => i18n.changeLanguage(lng)}
            disabled={i18n.resolvedLanguage === lng}
          >
            {languages[lng].nativeName}
          </S.SwitchLanguageButton>
        ))}
      </S.SwitchLanguageWrap>
      <S.Header>{t('header')}</S.Header>
      <TodoInput />
      <TodoList />
    </S.Body>
  );
};

export default HomePage;
