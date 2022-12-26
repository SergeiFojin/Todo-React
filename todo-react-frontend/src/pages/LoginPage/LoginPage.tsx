import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as S from './LoginPageStyles';
import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher';
import { user } from '../../types/types';

const LoginPage = () => {
  const [userNotFound, setUserNotFound] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    formState: {
      errors,
      isValid,
    },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = handleSubmit((data) => {
    if (data.username === user.username && data.password === user.password) {
      navigate('/todos');
      setUserNotFound(false);
    } else {
      setUserNotFound(true);
    }
    reset();
  });

  const { t } = useTranslation();
  return (
    <S.Wrap>
      <LanguageSwitcher />
      <S.Body>
        <S.Header>{t('loginHeader') ?? ''}</S.Header>
        <S.Form onSubmit={onSubmit}>
          <S.InputBody>
            <S.InputIcon>
              <S.InputIconImg
                src="/source/login.png"
                alt="login.png"
              />
            </S.InputIcon>
            <S.Input
              {...register('username', {
                required: `${t('loginUsernameError')}`,
              })}
              type="text"
              placeholder={t('loginUsername') ?? ''}
            />
          </S.InputBody>
          {errors.username
            && (
              <S.InputError>
                {errors.username.message?.toString() || 'Error!'}
              </S.InputError>
            )}

          <S.InputBody>
            <S.InputIcon>
              <S.InputIconImg
                src="/source/password.png"
                alt="password.png"
              />
            </S.InputIcon>
            <S.Input
              {...register('password', {
                required: `${t('loginPasswordError')}`,
                minLength: {
                  value: 6,
                  message: `${t('loginPasswordLengthError')}`,
                },
              })}
              type="password"
              placeholder={t('loginPassword') ?? ''}
            />
          </S.InputBody>
          {errors.password
            && (
            <S.InputError>
              {errors.password.message?.toString() || 'Error!'}
            </S.InputError>
            )}

          <S.InputSubmit type="submit" disabled={!isValid}>
            {t('loginSubmit') ?? ''}
          </S.InputSubmit>
          {userNotFound
            && (
              <S.InputError>
                {t('loginUserNotFound')}
              </S.InputError>
            )}
        </S.Form>
      </S.Body>
    </S.Wrap>
  );
};

export default LoginPage;
