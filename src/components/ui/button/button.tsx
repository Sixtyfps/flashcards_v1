import {ComponentPropsWithoutRef} from 'react'
import s from './button.module.scss'
// import a from '../../../images/icons/buttonIcons/log-out.svg'
export type ButtonProps = {
    variant?: 'primary' | 'secondary'
    fullWidth?: boolean
    Icon?: any;
} & ComponentPropsWithoutRef<'button'>



export const Button = ({ className, fullWidth = false, variant = 'primary', children,Icon, ...rest }: ButtonProps) => {

    let buttonClass = `${s.button} ${s[variant]}`;
    if (fullWidth) buttonClass += ` ${s.fullWidth}`;
    if (className) buttonClass += ` ${className}`;
    if (Icon && variant === 'primary') buttonClass += ` ${s.primaryWithIcon}`;
    if (Icon && variant === 'secondary') buttonClass += ` ${s.secondaryWithIcon}`;


    return (
        <button
            className={buttonClass}
            {...rest}
        >
            {Icon &&

                <img className={s.icon} src={Icon}/>

            }
            {children}
        </button>
    )
}

