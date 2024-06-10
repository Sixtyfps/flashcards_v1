import { CSSProperties, ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import clsx from 'clsx'

import s from './page.module.scss'

type Props = {
  pt?: CSSProperties['paddingTop']
} & ComponentPropsWithoutRef<'div'>
export const Page = forwardRef<ElementRef<'div'>, Props>(
  ({ children, className, pt = '33px' }, ref) => {
    return (
      <div className={clsx(className, s.Page)} ref={ref} style={{ paddingTop: pt }}>
        {children}
      </div>
    )
  }
)
