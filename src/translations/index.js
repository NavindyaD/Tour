import { en } from './en';
import { si } from './si';
import { ko } from './ko';
import { it } from './it';
import { ru } from './ru';
import { zh } from './zh';
import { hi } from './hi';
import { ar } from './ar';

export const translations = {
  en,
  si,
  ko,
  it,
  ru,
  zh,
  hi,
  ar
};

export const getTranslation = (language) => {
  return translations[language] || translations.en;
};

export { en, si, ko, it, ru, zh, hi, ar };
