import Validator from '~/src/validation/validator';

import { LogInFormData, LogInFormDataScheme } from './types';

const initData: LogInFormData = {
  email: '',
  password: '',
};

const scheme: LogInFormDataScheme = {
  email: Validator.string().required('Поле обязательно для заполнения'),
  password: Validator.string().required('Поле обязательно для заполнения'),
};

export { initData, scheme };
