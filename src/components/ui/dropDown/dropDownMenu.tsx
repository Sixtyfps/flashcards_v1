import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { DropDownTrigger } from '@/components/ui/dropDown/dropDownTrigger'
import { Typography } from '@/components/ui/typography'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { DropdownMenuPortal } from '@radix-ui/react-dropdown-menu'

import s from './dropDownMenu.module.scss'
type Props = {
  name: string
  trigger?: ReactNode
} & ComponentPropsWithoutRef<typeof DropdownMenu.Root>

export const DropDownMenu = (props: Props) => {
  const { children, name, trigger, ...rest } = props

  return (
    <DropdownMenu.Root {...rest}>
      <DropDownTrigger>
        <div className={s.profileContainer}>
          <Typography className={s.profileText} variant={'subtitle1'}>
            {name}
          </Typography>
          {trigger}
        </div>
      </DropDownTrigger>
      <DropdownMenuPortal>
        <DropdownMenu.Content align={'end'} className={s.dropdownContent} sideOffset={5}>
          {children}
        </DropdownMenu.Content>
      </DropdownMenuPortal>
    </DropdownMenu.Root>
  )
}
