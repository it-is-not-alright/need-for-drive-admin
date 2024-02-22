import { Validatable } from '~/src/validation/types';

import { CarFormData } from '../types';

type CarCardProps = {
  percentage: number;
  formData: Validatable<CarFormData>;
  onInput: (key: string, value: unknown) => void;
};

export { CarCardProps };
