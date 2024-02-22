import { FormControlProps } from '../FormControlWrapper/types';
import { SelectItem, SelectProps } from '../Select/types';

type FormSelectProps<T extends SelectItem> = FormControlProps & SelectProps<T>;

export { FormSelectProps };
