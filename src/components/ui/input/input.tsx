import React, {
  ChangeEvent,
  ComponentPropsWithoutRef,
  MouseEventHandler,
  ReactNode,
  useId,
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
    const finalId = useLabelId(id)
    const [isVisible, setIsVisible] = useState(false)
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      onChangeText?.(e.currentTarget.value)
    }

    const finalSpanClassName = s.error + (spanClassName ? ' ' + spanClassName : '')

    let inputClasses = [s.inputWrapper, s[variant]]
    if (error) inputClasses.push(s.inputError)
    if (type === 'password') inputClasses.push(s.password)

    return (
      <div>
        {label && <label htmlFor={finalId}>{label}</label>}
        <div className={inputClasses.join(' ')}>
          {onResetClick && <img className={s.search} onClick={onResetClick} src={search} />}
          <input
            ref={ref}
            id={finalId}
            type={type === 'password' && isVisible ? 'text' : type}
            onChange={onChangeCallback}
            className={s.input}
            placeholder={onResetClick ? 'Input search' : error ? 'Error' : 'Input'}
            disabled={disabled}
            value={value}
            {...restProps}
          />
          {type === 'password' && (
            <img
              onClick={() => setIsVisible(!isVisible)}
              className={s.icon}
              src={isVisible ? eysClose : eysOpen}
            />
          )}
          {onResetClick && !!value && <img onClick={onResetClick} src={deleteIcon} />}
        </div>
        <div className={finalSpanClassName}>{error}</div>
      </div>
    )
  }
)

export function useLabelId(id?: string) {
  const generatedId = useId()

  if (!id) {
    return generatedId
  }

  return id
}
