import { useState } from 'react'

import { Typography } from '@/components/ui/typography'
import Check from '@/images/icons/Check'
import * as CheckboxRadix from '@radix-ui/react-checkbox'

import s from './checkbox.module.scss'

export type CheckboxProps = {
  checkedDefault?: boolean
  disabled?: boolean
  id: string
  label?: string
}

export const Checkbox = ({ checkedDefault = true, disabled, id, label }: CheckboxProps) => {
  const [checked, setChecked] = useState<'indeterminate' | boolean>(checkedDefault)

  return (
    <div
      className={`${s.Checkbox} ${checked ? s.CheckboxChecked : ''} ${
        disabled ? s.CheckboxDisabled : ''
      }`}
    >
      <CheckboxRadix.Root
        checked={checked}
        className={s.CheckboxRoot}
        disabled={disabled}
        id={id}
        onCheckedChange={checked => setChecked(checked)}
      >
        <CheckboxRadix.Indicator className={s.CheckboxIndicator}>
          <Check />
        </CheckboxRadix.Indicator>
      </CheckboxRadix.Root>
      <Typography as={'label'} className={s.CheckboxLabel} htmlFor={id} variant={'body2'}>
        {label}
      </Typography>
    </div>
  )
}
