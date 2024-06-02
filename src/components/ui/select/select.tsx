import { ComponentPropsWithoutRef, useId } from 'react'

import { Typography } from '@/components/ui/typography'
import ArrowDown from '@/images/icons/ArrowDown'
import ArrowTop from '@/images/icons/ArrowTop'
import * as SelectRadix from '@radix-ui/react-select'
import clsx from 'clsx'

import s from './select.module.scss'

import { SelectItem } from './selectItem/selectItem'

type selectItem = {
  title: string
  value: string
}

type SelectProps = {
  disabled?: boolean
  items: selectItem[]
  label?: string
  placeholder?: string
} & ComponentPropsWithoutRef<typeof SelectRadix.Root>

export const Select = ({ disabled, items, label, placeholder, ...restProps }: SelectProps) => {
  const id = useId()

  return (
    <div className={s.SelectWrapp}>
      {label && (
        <Typography
          as={'label'}
          className={clsx(s.SelectLabel, disabled ? s.SelectLabelDisabled : '', s.SelectLabel)}
          htmlFor={id}
          variant={'body2'}
        >
          {label}
        </Typography>
      )}
      <SelectRadix.Root disabled={disabled} {...restProps}>
        <SelectRadix.Trigger aria-label={'Food'} className={s.SelectTrigger} id={id}>
          <SelectRadix.Value placeholder={placeholder}></SelectRadix.Value>
          <SelectRadix.Icon className={s.SelectIcon}>
            <ArrowDown />
          </SelectRadix.Icon>
        </SelectRadix.Trigger>
        <SelectRadix.Portal>
          <SelectRadix.Content className={s.SelectContent} position={'popper'} sideOffset={0}>
            <SelectRadix.ScrollUpButton className={s.SelectScrollButton}>
              <ArrowTop height={6} width={11} />
            </SelectRadix.ScrollUpButton>
            <SelectRadix.Viewport className={s.SelectViewport}>
              <SelectRadix.Group>
                {items.map((item, index) => (
                  <SelectItem key={`${item.value}-${index}`} value={item.value}>
                    {item.title}
                  </SelectItem>
                ))}
              </SelectRadix.Group>
            </SelectRadix.Viewport>
            <SelectRadix.ScrollDownButton className={s.SelectScrollButton}>
              <ArrowDown />
            </SelectRadix.ScrollDownButton>
          </SelectRadix.Content>
        </SelectRadix.Portal>
      </SelectRadix.Root>
    </div>
  )
}
