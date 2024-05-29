import { ComponentPropsWithoutRef, ElementType } from 'react'
import s from './button.module.scss'
import clsx from 'clsx'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  variant?: 'icon' | 'link' | 'primary' | 'secondary'
  fullWidth?: boolean
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const {
    className,
    fullWidth = false,
    variant = 'primary',
    as: Component = 'button',
    ...rest
  } = props
  let buttonClass = clsx(s.button, s[variant], fullWidth && s.fullWidth)

  return <Component className={`${buttonClass} ${className}`} {...rest} />
}
