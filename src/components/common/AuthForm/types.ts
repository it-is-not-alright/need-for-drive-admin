import { ValidatablePropetry } from '~/src/validation/types';

type AuthFormProps = {
  onSubmit: () => void;
  email: ValidatablePropetry<string>;
  password: ValidatablePropetry<string>;
  onInputChange: (value: string, prop: string) => void;
  passwordConfirm?: ValidatablePropetry<string>;
};

export { AuthFormProps };
