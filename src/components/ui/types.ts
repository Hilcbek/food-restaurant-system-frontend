import {
  type FieldErrors,
  type FieldValues,
  type Path,
  type UseFormRegister,
} from 'react-hook-form';
export interface inputProps<T extends FieldValues> {
  name: Path<T>;
  id: Path<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  required?: boolean;
}
