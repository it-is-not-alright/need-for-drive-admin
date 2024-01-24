import { Scheme, Validatable } from '~/src/validation/types';

type LogInFormFields = {
  email: string;
  password: string;
};

type LogInFormData = Validatable<LogInFormFields>;

type LogInFormScheme = Scheme<LogInFormData>;

export { LogInFormData, LogInFormFields, LogInFormScheme };
