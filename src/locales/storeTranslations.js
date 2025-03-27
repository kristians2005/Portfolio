import { ref } from 'vue';
import { translations } from './translations';

const currentLanguage = ref('en');

export const t = (key) => {
  const keys = key.split('.');
  let value = translations[currentLanguage.value];
  
  for (const k of keys) {
    value = value[k];
  }
  
  return value;
};

export const changeLanguage = (newLang) => {
  if (translations[newLang]) {
    currentLanguage.value = newLang;
  }
};

export const getCurrentLanguage = () => currentLanguage.value;
