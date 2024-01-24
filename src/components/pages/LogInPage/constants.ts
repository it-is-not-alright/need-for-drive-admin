import { LogInFormData, LogInFormScheme } from './types';

const initLogInFormData: LogInFormData = {
  email: {
    value: '',
    error: '',
  },
  password: {
    value: '',
    error: '',
  },
};

const logInDataScheme: LogInFormScheme = {
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
};

export { initLogInFormData, logInDataScheme };
