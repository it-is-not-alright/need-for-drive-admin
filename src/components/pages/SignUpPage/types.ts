import { Scheme } from '~/src/validation/types';

type SignUpFormData = {
  email: string;
  password: string;
  passwordConfirm: string;
};

type SignUpFormDataScheme = Scheme<SignUpFormData>;

export { SignUpFormData, SignUpFormDataScheme };
