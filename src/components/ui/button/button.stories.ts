import type { Meta, StoryObj } from '@storybook/react'
import testImg from '../../../images/icons/buttonIcons/log-out.svg'
import { Button } from './'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    title: 'Add New Card',
    disabled: false,
    children: 'sdsd',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    title: 'Secondary Button',
    disabled: false,
  },
}

export const FullWidth: Story = {
  args: {
    variant: 'primary',
    title: 'Full Width Primary Button',
    disabled: false,
    fullWidth: true,
  },
}

export const ButtonWithIcons: Story = {
  args: {
    Icon: testImg,
    variant: 'secondary',
    title: 'Secondary Button',
    disabled: false,
  },
}
