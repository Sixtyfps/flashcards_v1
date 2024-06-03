import { ComponentPropsWithoutRef, ReactNode } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { DropdownMenuPortal } from '@radix-ui/react-dropdown-menu'

import s from './dropDownMenu.module.scss'
type Props = {
  trigger?: ReactNode
} & ComponentPropsWithoutRef<typeof DropdownMenu.Root>

export const DropDownMenu = (props: Props) => {
  const { children, trigger, ...rest } = props

  return (
    <DropdownMenu.Root {...rest}>
      <DropdownMenu.Trigger className={s.dropdownTrigger}>{trigger}</DropdownMenu.Trigger>
      <DropdownMenuPortal>
        <DropdownMenu.Content align={'end'} className={s.dropdownContent} sideOffset={5}>
          {children}
        </DropdownMenu.Content>
      </DropdownMenuPortal>
    </DropdownMenu.Root>
  )
}
