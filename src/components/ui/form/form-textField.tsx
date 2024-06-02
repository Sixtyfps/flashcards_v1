import { ChangeEvent } from 'react'
import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { TextField } from '../input/input'

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
    field: { onBlur, onChange, ref, value, ...field },
  } = useController({ control, defaultValue, disabled, name, rules, shouldUnregister })

  return (
    <TextField
      {...restProps}
      disabled={disabled}
      name={name}
      onBlur={onBlur}
      onChange={e => onChange(e as unknown as ChangeEvent)}
      ref={ref}
      value={value}
      {...field}
    />
  )
}
