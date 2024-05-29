import { Typography } from '@/components/ui/typography'
import ArrowDown from '@/images/icons/ArrowDown'
import ArrowTop from '@/images/icons/ArrowTop'
import * as SelectRadix from '@radix-ui/react-select'

import s from './select.module.scss'

import { SelectItem } from './selectItem/selectItem'

type selectItem = {
  id: string
  title: string
  value: string
}

type SelectProps = {
  disabled?: boolean
  items: selectItem[]
  label?: string
  placeholder?: string
}

export const Select = ({ disabled, items, label, placeholder }: SelectProps) => (
  <div className={s.SelectWrapp}>
    {label && (
      <Typography
        as={'label'}
        className={`${s.SelectLabel} ${disabled ? s.SelectLabelDisabled : ''}`}
        variant={'body2'}
      >
        {label}
      </Typography>
    )}
    <SelectRadix.Root disabled={disabled}>
      <SelectRadix.Trigger aria-label={'Food'} className={s.SelectTrigger}>
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
              {items.map(item => (
                <SelectItem key={item.id} value={item.value}>
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
