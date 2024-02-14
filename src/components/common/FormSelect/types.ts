import { ControlItem } from '../../types';
import { FormControlProps } from '../FormControlWrapper/types';
import { SelectProps } from '../Select/types';

type FormSelectProps<T extends ControlItem> = FormControlProps & SelectProps<T>;

export { FormSelectProps };
