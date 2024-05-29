import React, {
  ChangeEvent,
  ComponentPropsWithoutRef,
  KeyboardEvent,
  MouseEventHandler,
  ReactNode,
  useState,
} from 'react'
import s from './input.module.scss'
import eysOpen from '../../../images/icons/input/eye-outline.svg'
import eysClose from '../../../images/icons/input/eye-off-outline.svg'
import deleteIcon from '../../../images/icons/input/close-outline.svg'
import search from '../../../images/icons/input/Search.svg'

type SuperInputTextPropsType = ComponentPropsWithoutRef<'input'> & {
  onChangeText?: (value: string) => void
  onEnter?: () => void
  error?: ReactNode
  spanClassName?: string
  inputType?: string
  label?: string
  variant?: 'email' | 'password' | 'normal'
  onResetClick?: MouseEventHandler<HTMLImageElement>
}

export const SuperInputText = React.forwardRef<HTMLInputElement, SuperInputTextPropsType>(
  (
    {
      onChange,
      onChangeText,
      onKeyPress,
      onEnter,
      error,
      className,
      spanClassName,
      id,
      inputType,
      label,
      variant = 'normal',
      type = 'text',
      onResetClick,
      disabled,
      value,
      ...restProps
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState(false)
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      onChangeText?.(e.currentTarget.value)
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        onEnter?.()
        onKeyPress?.(e)
      }
    }

    const finalSpanClassName = s.error + (spanClassName ? ' ' + spanClassName : '')

    let inputClass = `${s.inputWrapper} ${s[variant]}`
    if (error) inputClass += ` ${s.inputError}`
    if (type === 'password') inputClass += ` ${s.password}`

    return (
      <div>
        {label && <label htmlFor={id}>{label}</label>}
        <div className={inputClass}>
          {onResetClick && <img className={s.search} onClick={onResetClick} src={search} />}
          <input
            ref={ref}
            id={id}
            type={type === 'password' && isVisible ? 'text' : type}
            onChange={onChangeCallback}
            onKeyDown={onKeyPressCallback}
            className={s.input}
            placeholder={onResetClick ? 'Input search' : error ? 'Error' : 'Input'}
            disabled={disabled}
            value={value}
            {...restProps}
          />
          {type === 'password' &&
            (isVisible ? (
              <img onClick={() => setIsVisible(!isVisible)} className={s.icon} src={eysClose} />
            ) : (
              <img onClick={() => setIsVisible(!isVisible)} className={s.icon} src={eysOpen} />
            ))}
          {onResetClick && !!value && <img onClick={onResetClick} src={deleteIcon} />}
        </div>
        <div id={id ? id + '-span' : undefined} className={finalSpanClassName}>
          {error}
        </div>
      </div>
    )
  }
)
