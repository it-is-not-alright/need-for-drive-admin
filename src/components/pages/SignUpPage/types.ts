import { Scheme, Validatable } from '~/src/validation/types';

type SignUpFormFields = {
  email: string;
  password: string;
  passwordConfirm: string;
};

type SignUpFormData = Validatable<SignUpFormFields>;

type SignUpFormDataScheme = Scheme<SignUpFormFields>;

export { SignUpFormData, SignUpFormDataScheme, SignUpFormFields };
