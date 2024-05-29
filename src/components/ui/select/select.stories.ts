import type { Meta, StoryObj } from '@storybook/react'

import { Select } from './select'

const meta = {
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

const selectItems = [
  { id: '1', title: 'Option 1', value: '1' },
  { id: '2', title: 'Option 2', value: '2' },
  { id: '3', title: 'Option 3', value: '3' },
]

export const SelectDefault: Story = {
  args: {
    items: selectItems,
    placeholder: 'Select-box',
  },
}

export const SelectDefaultWithLabel: Story = {
  args: {
    items: selectItems,
    label: 'Select-box',
    placeholder: 'Select-box',
  },
}

export const SelectDisabled: Story = {
  args: {
    disabled: true,
    items: selectItems,
    placeholder: 'Select-box',
  },
}

export const SelectWithLabelDisabled: Story = {
  args: {
    disabled: true,
    items: selectItems,
    label: 'Select-box',
    placeholder: 'Select-box',
  },
}
