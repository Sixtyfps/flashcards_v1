import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { SuperInputTextPropsType, TextField } from '../input/input'

type Props<T extends FieldValues> = Omit<
  SuperInputTextPropsType,
  'disabled' | 'name' | 'onBlur' | 'onChange' | 'ref' | 'value'
> &
  UseControllerProps<T>

export const FormInput = <T extends FieldValues>({
  control,
  defaultValue,
  disabled,
  name,
  rules,
  shouldUnregister,
  ...restProps
}: Props<T>) => {
  const {
    field: { name: fieldName, onBlur, onChange, ref, value, ...field },
    fieldState: { error },
  } = useController({ control, defaultValue, disabled, name, rules, shouldUnregister })

  return (
    <TextField
      {...restProps}
      disabled={disabled}
      error={error?.message}
      name={fieldName}
      ref={ref}
      value={value}
      {...field}
    />
  )
}