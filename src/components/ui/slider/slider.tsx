import * as Slider from '@radix-ui/react-slider'
import s from './slider.module.scss'
import { useState } from 'react'
import { Typography } from '@/components/ui/typography'

export const SliderApp = () => {
  const [values, setValues] = useState([20, 80])
  const getPadding = (val: number) => {
    return val >= 10 ? s.doubleDigitPadding : s.singleDigitPadding
  }

  return (
    <form>
      <Typography as={'div'} variant={'body2'} style={{ fontSize: '14px', marginBottom: '5px' }}>
        Number of cards
      </Typography>
      <div className={s.sliderContainer}>
        <Typography
          as={'div'}
          variant={'body1'}
          className={`${s.sliderValue} ${getPadding(values[0])}`}
        >
          {values[0]}
        </Typography>
        <Slider.Root
          className={s.SliderRoot}
          value={values}
          onValueChange={setValues}
          max={99}
          step={1}
        >
          <Slider.Track className={s.SliderTrack}>
            <Slider.Range className={s.SliderRange} />
          </Slider.Track>
          <Slider.Thumb className={s.SliderThumb} aria-label="Lower value" />
          <Slider.Thumb className={s.SliderThumb} aria-label="Higher value" />
        </Slider.Root>
        <div className={`${s.sliderValue} ${getPadding(values[1])}`}>{values[1]}</div>
      </div>
    </form>
  )
}
