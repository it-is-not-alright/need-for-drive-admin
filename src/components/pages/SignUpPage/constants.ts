import Validator from '~/src/validation/validator';

import { SignUpFormData, SignUpFormDataScheme } from './types';

const initData: SignUpFormData = {
  email: '',
  password: '',
  passwordConfirm: '',
};

const scheme: SignUpFormDataScheme = {
  email: Validator.string()
    .required('Поле обязательно для заполнения')
    .matches(/^\S+@\S+\.\S+$/, 'Некорректный адрес электронной почты'),
  password: Validator.string().required('Поле обязательно для заполнения'),
  passwordConfirm: Validator.string(),
};

export { initData, scheme };
