import * as Slider from '@radix-ui/react-slider'
import s from './slider.module.scss'
import { useState } from 'react'
import { Typography } from '@/components/ui/typography'

type SliderType = {
  initialStateSlider: number[]
  max?: number
  step?: number
}

export const SliderApp = (props: SliderType) => {
  const { initialStateSlider, max = 99, step = 1 } = props

  const [values, setValues] = useState(initialStateSlider)

  return (
    <form>
      <Typography as={'div'} variant={'body2'} style={{ fontSize: '14px', marginBottom: '5px' }}>
        Number of cards
      </Typography>
      <div className={s.sliderContainer}>
        <Typography as={'div'} variant={'body1'} className={s.sliderValue}>
          {values[0]}
        </Typography>
        <Slider.Root
          className={s.SliderRoot}
          value={values}
          onValueChange={setValues}
          max={max}
          step={step}
        >
          <Slider.Track className={s.SliderTrack}>
            <Slider.Range className={s.SliderRange} />
          </Slider.Track>
          <Slider.Thumb className={s.SliderThumb} aria-label="Lower value" />
          <Slider.Thumb className={s.SliderThumb} aria-label="Higher value" />
        </Slider.Root>
        <div className={s.sliderValue}>{values[1]}</div>
      </div>
    </form>
  )
}
