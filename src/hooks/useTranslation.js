import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';

export const useTranslation = () => {
  const { currentLanguage, changeLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);
  
  return {
    t,
    currentLanguage,
    changeLanguage
  };
};
