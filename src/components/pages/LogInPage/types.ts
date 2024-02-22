import { Scheme } from '~/src/validation/types';

type LogInFormData = {
  email: string;
  password: string;
};

type LogInFormDataScheme = Scheme<LogInFormData>;

export { LogInFormData, LogInFormDataScheme };
