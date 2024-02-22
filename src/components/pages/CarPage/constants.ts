import Validator from '~/src/validation/validator';

import { CarFormData, CarFormDataScheme } from './types';

const initCarFormData: CarFormData = {
  id: null,
  name: '',
  number: '',
  priceMin: null,
  priceMax: null,
  description: '',
  tank: null,
  colors: [],
  thumbnail: null,
  category: null,
};

const scheme: CarFormDataScheme = {
  name: Validator.string().required('Поле обязательно для заполнения'),
  number: Validator.string().required('Поле обязательно для заполнения'),
  priceMin: Validator.number()
    .required('Поле обязательно для заполнения')
    .min(1, 'Стоимость не может быть меньше 1₽'),
  priceMax: Validator.number().required('Поле обязательно для заполнения'),
  tank: Validator.number().required('Поле обязательно для заполнения'),
  colors: Validator.array().required('Укажите не менее одного цвета'),
  thumbnail: Validator.object().required('Выберите изображение для автомобиля'),
  category: Validator.object().required('Поле обязательно для заполнения'),
};

export { initCarFormData, scheme };
