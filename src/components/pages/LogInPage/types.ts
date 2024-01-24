import { Scheme, Validatable } from '~/src/validation/types';

type LogInFormFields = {
  email: string;
  password: string;
};

type LogInFormData = Validatable<LogInFormFields>;

type LogInFormDataScheme = Scheme<LogInFormFields>;

export { LogInFormData, LogInFormDataScheme, LogInFormFields };
