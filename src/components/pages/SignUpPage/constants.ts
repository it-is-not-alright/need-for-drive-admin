import Validator from '~/src/validation/validator';

import { SignUpFormData, SignUpFormDataScheme } from './types';

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

const signUpDataScheme: SignUpFormDataScheme = {
  email: Validator.string()
    .min(1, 'Поле обязательно для заполнения')
    .matches(/^\S+@\S+\.\S+$/, 'Некорректный адрес электронной почты'),
  password: Validator.string().min(1, 'Поле обязательно для заполнения'),
  passwordConfirm: Validator.string(),
};

export { initSignUpFormData, signUpDataScheme };
