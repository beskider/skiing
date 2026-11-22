import { useTranslation } from 'react-i18next';
import { LangSwitchButton } from './LanguageSwitch.styles';

export const LanguageSwitcher = () => {

  const { i18n } = useTranslation();  

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (  
    <div>
      <LangSwitchButton
        $disabled={i18n.resolvedLanguage === 'en'}    
        onClick={() => changeLanguage('en')}
        disabled={i18n.resolvedLanguage === 'en'}
      >EN</LangSwitchButton>
      |
      <LangSwitchButton
        $disabled={i18n.resolvedLanguage === 'pl'}
        onClick={() => changeLanguage('pl')}
        disabled={i18n.resolvedLanguage === 'pl'}
      >PL</LangSwitchButton>   
    </div>
  )
}