import type { Meta, StoryObj } from '@storybook/react'

import { SliderApp } from './slider'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
  },
  component: SliderApp,
  tags: ['autodocs'],
  title: 'Components/Slider',
} satisfies Meta<typeof SliderApp>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Primary Card',
    disabled: false,
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary Card',
    disabled: false,
    variant: 'secondary',
  },
}

export const FullWidth: Story = {
  args: {
    children: 'Full Width Primary Card',
    disabled: false,
    fullWidth: true,
    variant: 'primary',
  },
}

export const AsLink: Story = {
  args: {
    children: 'Link that looks like a button',
    variant: 'primary',
  },
}
