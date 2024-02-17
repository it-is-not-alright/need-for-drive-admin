import { Validatable } from '~/src/validation/types';

import { CarFormData } from '../types';

type CarFormProps = {
  formData: Validatable<CarFormData>;
  onInput: (key: string, value: unknown) => void;
  onSubmit: () => void;
  onCancel: () => void;
};

export { CarFormProps };
