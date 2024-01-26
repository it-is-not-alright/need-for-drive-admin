import Validator from '~/src/validation/validator';

import { LogInFormData, LogInFormDataScheme } from './types';

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

const logInDataScheme: LogInFormDataScheme = {
  email: Validator.string()
    .min(1, 'Поле обязательно для заполнения')
    .matches(/^\S+@\S+\.\S+$/, 'Некорректный адрес электронной почты'),
  password: Validator.string().min(1, 'Поле обязательно для заполнения'),
};

export { initLogInFormData, logInDataScheme };
