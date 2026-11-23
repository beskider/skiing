import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LangSwitchButtonWrapper, Flag, LangSwitchButton, LangMenu, LangMenuItem, LangMenuItemButton } from './LanguageSwitch.styles';

import { useOutsideClick } from 'hooks/useOutsideClick';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export const LanguageSwitcher = () => {
  
  const [ langMenuVisible, setLangMenuVisible ] = useState(false)

  const closeMenu = () => setLangMenuVisible(false)

  const ref = useOutsideClick(closeMenu)
  
    const { i18n } = useTranslation();    
  
  const handleSwitchLang = () => {   
    setLangMenuVisible(!langMenuVisible)    
  }
  
  const handleChangeLang = lang => {    
    i18n.changeLanguage(lang);
    setLangMenuVisible(!langMenuVisible)
  }

  const flagUrl = language => {  
    if ( language === 'en' ) {
      language = 'us'
    }    
    return `https://flagsapi.com/${language.toUpperCase()}/flat/32.png`;
  }
  
  const currentLang = i18n.resolvedLanguage || i18n.language;

  const getFullLangName = shortName => {    
    const fullName = new Intl.DisplayNames([shortName], { type: 'language' }).of(shortName);
    return fullName.charAt(0).toUpperCase() + fullName.slice(1);
  }

  const loadedLanguages = Object.keys(i18n.services.resourceStore.data || {});

  return (  
    <LangSwitchButtonWrapper>

      <LangSwitchButton onClick={handleSwitchLang} $active={langMenuVisible}>
        <Flag src={`https://flagsapi.com/${flagUrl(currentLang)}/flat/32.png`} alt="Current language flag" />
        { currentLang.toUpperCase() }
      </LangSwitchButton>

      { langMenuVisible && (
        <LangMenu ref={ref}>
          { loadedLanguages.map( lang =>         
              <LangMenuItem key={lang}>
                <LangMenuItemButton onClick={() => handleChangeLang(lang)}>
                  <div><Flag src={`https://flagsapi.com/${flagUrl(lang)}/flat/32.png`} alt="Current language flag" /></div>
                  <div>{getFullLangName(lang)}</div>
                  <div>{(lang === currentLang) && <FontAwesomeIcon icon={faCheck} />}</div>
                </LangMenuItemButton>              
              </LangMenuItem>        
          )}
        </LangMenu>
      )}
    </LangSwitchButtonWrapper>
  )
}