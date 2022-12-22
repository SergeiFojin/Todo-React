import React from 'react';
import { useTranslation } from 'react-i18next';
import * as S from './LanguageSwitcherStyles';
import { languagesType } from '../../types/types';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const languages: languagesType = {
    en: { nativeName: 'English' },
    ru: { nativeName: 'Russian' },
  };

  return (
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
  );
};

export default LanguageSwitcher;
