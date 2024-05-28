import { ComponentPropsWithoutRef, ElementType } from 'react'
import s from './button.module.scss'
// clsx
export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  variant?: 'primary' | 'secondary'
  fullWidth?: boolean
  Icon?: string
  title: string
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>({
  className,
  fullWidth = false,
  variant = 'primary',
  title,
  Icon,
  as: Component,
  ...rest
}: ButtonProps<T>) => {
  let buttonClass = `${s.button} ${s[variant]}`

  if (fullWidth) buttonClass += ` ${s.fullWidth}`
  if (className) buttonClass += ` ${className}`
  if (Icon && variant === 'primary') buttonClass += ` ${s.primaryWithIcon}`
  if (Icon && variant === 'secondary') buttonClass += ` ${s.secondaryWithIcon}`
  if (Icon && variant === 'secondary') buttonClass += ` ${s.secondaryWithIcon}`

  const Element = Component ?? 'button'

  return (
    <Element className={buttonClass} {...rest}>
      {Icon && <img className={s.icon} src={Icon} />}
      {title}
    </Element>
  )
}
