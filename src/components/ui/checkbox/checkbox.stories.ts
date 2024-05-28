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
    id: 's_1',
  },
}

export const CheckboxUnchecked: Story = {
  args: {
    checkedDefault: false,
    id: 's_1',
  },
}

export const CheckboxWithLabel: Story = {
  args: {
    id: 's_2',
    label: 'Check-box',
  },
}

export const CheckboxWithLabelUnchecked: Story = {
  args: {
    checkedDefault: false,
    id: 's_2',
    label: 'Check-box',
  },
}

export const CheckboxDisabled: Story = {
  args: {
    disabled: true,
    id: 's_3',
  },
}

export const CheckboxDisabledUnchecked: Story = {
  args: {
    checkedDefault: false,
    disabled: true,
    id: 's_3',
  },
}

export const CheckboxWithLabelDisabled: Story = {
  args: {
    disabled: true,
    id: 's_4',
    label: 'Check-box',
  },
}

export const CheckboxWithLabelDisabledUnchecked: Story = {
  args: {
    checkedDefault: false,
    disabled: true,
    id: 's_4',
    label: 'Check-box',
  },
}
