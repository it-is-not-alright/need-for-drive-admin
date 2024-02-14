import { CarRaw } from '~/src/api/types';
import carImage from '~/src/assets/images/hyundai_i30-n.png';

const carRaw: CarRaw = {
  id: 1,
  name: 'Hyundai, i30 N',
  number: '',
  priceMax: 1,
  priceMin: 0,
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae quod dolorum sint alias, possimus illum assumenda eligendi cumque?',
  tank: '',
  colors: ['Красный', 'Черный', 'Синий'],
  thumbnail: {
    path: carImage,
  },
  categoryId: {
    id: 1,
    name: 'Компакт-кар',
  },
};

export { carRaw };
