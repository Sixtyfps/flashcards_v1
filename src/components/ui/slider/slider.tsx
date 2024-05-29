import * as Slider from '@radix-ui/react-slider'
import s from './slider.module.scss'
import { Typography } from '@/components/ui/typography'

export type SliderType = {
  value: number[]
  max?: number
  step?: number
  setValue?: (value: number[]) => void
}

export const SliderApp = (props: SliderType) => {
  const { value, max = 99, step = 1, setValue } = props

  return (
    <form>
      <Typography as={'div'} variant={'body2'} style={{ fontSize: '14px', marginBottom: '5px' }}>
        Number of cards
      </Typography>
      <div className={s.sliderContainer}>
        <Typography as={'div'} variant={'body1'} className={s.sliderValue}>
          {value[0]}
        </Typography>
        <Slider.Root
          className={s.SliderRoot}
          value={value}
          onValueChange={setValue}
          max={max}
          step={step}
        >
          <Slider.Track className={s.SliderTrack}>
            <Slider.Range className={s.SliderRange} />
          </Slider.Track>
          <Slider.Thumb className={s.SliderThumb} aria-label="Lower value" />
          <Slider.Thumb className={s.SliderThumb} aria-label="Higher value" />
        </Slider.Root>
        <div className={s.sliderValue}>{value[1]}</div>
      </div>
    </form>
  )
}
