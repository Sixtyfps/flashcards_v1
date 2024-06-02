import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './'

const meta = {
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const CheckboxDefault: Story = {
  args: {
    defaultChecked: true,
  },
}

export const CheckboxUndefaultChecked: Story = {
  args: {
    defaultChecked: false,
  },
}

export const CheckboxWithLabel: Story = {
  args: {
    defaultChecked: true,
    label: 'Check-box',
  },
}

export const CheckboxWithLabelUndefaultChecked: Story = {
  args: {
    defaultChecked: false,
    label: 'Check-box',
  },
}

export const CheckboxDisabled: Story = {
  args: {
    defaultChecked: true,
    disabled: true,
  },
}

export const CheckboxDisabledUndefaultChecked: Story = {
  args: {
    defaultChecked: false,
    disabled: true,
  },
}

export const CheckboxWithLabelDisabled: Story = {
  args: {
    defaultChecked: true,
    disabled: true,
    label: 'Check-box',
  },
}

export const CheckboxWithLabelDisabledUndefaultChecked: Story = {
  args: {
    defaultChecked: false,
    disabled: true,
    label: 'Check-box',
  },
}
