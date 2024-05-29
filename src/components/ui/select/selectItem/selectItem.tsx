import React, { ForwardedRef } from 'react'

import { Typography } from '@/components/ui/typography'
import * as SelectRadix from '@radix-ui/react-select'

import s from './selectItem.module.scss'

type SelectItemProps = {
  children: React.ReactNode
  className?: string
  disabled?: boolean
  value: string
}

export const SelectItem = React.forwardRef(
  (
    { children, className, ...props }: SelectItemProps,
    forwardedRef: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <SelectRadix.Item className={`${s.SelectItem} ${className}`} {...props} ref={forwardedRef}>
        <SelectRadix.ItemText>
          <Typography as={'div'} className={s.SelectItemText}>
            {children}
          </Typography>
        </SelectRadix.ItemText>
      </SelectRadix.Item>
    )
  }
)
