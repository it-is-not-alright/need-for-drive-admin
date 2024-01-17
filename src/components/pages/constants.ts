import { Scheme, ValueWrapper } from '~/src/validation/types';

const signInParam = 'sign-in';

const initEmail: ValueWrapper = {
  value: '',
  error: '',
};

const initPassword: ValueWrapper = {
  value: '',
  error: '',
};

const emailScheme: Scheme = {
  minLen: {
    target: 1,
    message: 'Поле обязательно для заполнения',
  },
  maxLen: {
    target: 150,
    message: 'Превышен лимит символов',
  },
  pattern: {
    target: /^\S+@\S+\.\S+$/,
    message: 'Некорректный адрес электронной почты',
  },
};

const passwordScheme: Scheme = {
  minLen: {
    target: 1,
    message: 'Поле обязательно для заполнения',
  },
  maxLen: {
    target: 150,
    message: 'Превышен лимит символов',
  },
};

const passwordConfirmScheme: Scheme = {
  pattern: {
    target: /(?:)/,
    message: 'Пароли не совпадают',
  },
};

export {
  emailScheme,
  initEmail,
  initPassword,
  passwordConfirmScheme,
  passwordScheme,
  signInParam,
};
