import { en } from './en';
import { si } from './si';
import { ko } from './ko';
import { it } from './it';

export const translations = {
  en,
  si,
  ko,
  it
};

export const getTranslation = (language) => {
  return translations[language] || translations.en;
};

export { en, si, ko, it };
