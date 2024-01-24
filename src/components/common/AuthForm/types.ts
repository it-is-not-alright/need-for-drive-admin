import { ValidatableProp } from '~/src/validation/types';

type AuthFormProps = {
  onSubmit: () => void;
  email: ValidatableProp<string>;
  password: ValidatableProp<string>;
  onInputChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    prop: string,
  ) => void;
  passwordConfirm?: ValidatableProp<string>;
};

export { AuthFormProps };
