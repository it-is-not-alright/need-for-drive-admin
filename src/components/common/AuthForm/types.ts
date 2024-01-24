import { ValidatableProp } from '~/src/validation/types';

type AuthFormProps = {
  onSubmit: () => void;
  email: ValidatableProp<string>;
  password: ValidatableProp<string>;
  onInputChange: (value: string, prop: string) => void;
  passwordConfirm?: ValidatableProp<string>;
};

export { AuthFormProps };
