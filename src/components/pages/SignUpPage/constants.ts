import { SignUpFormData, SignUpFormScheme } from './types';

const initSignUpFormData: SignUpFormData = {
  email: {
    value: '',
    error: '',
  },
  password: {
    value: '',
    error: '',
  },
  passwordConfirm: {
    value: '',
    error: '',
  },
};

const signUpDataScheme: SignUpFormScheme = {
  email: {
    minLen: {
      target: 1,
      message: 'Поле обязательно для заполнения',
    },
    pattern: {
      target: /^\S+@\S+\.\S+$/,
      message: 'Некорректный адрес электронной почты',
    },
  },
  password: {
    minLen: {
      target: 1,
      message: 'Поле обязательно для заполнения',
    },
  },
  passwordConfirm: {
    pattern: {
      target: /(?:)/,
      message: 'Пароли не совпадают',
    },
  },
};

export { initSignUpFormData, signUpDataScheme };
