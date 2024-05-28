import type { Meta, StoryObj } from '@storybook/react'
import { SuperInputText } from '@/components/ui/input/input'

const meta = {
  title: 'Components/SuperInputText',
  component: SuperInputText,
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    error: { control: 'text' },
    spanClassName: { control: 'text' },
    type: {
      options: ['text', 'password', 'email'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof SuperInputText>

export default meta

type Story = StoryObj<typeof meta>

export const PasswordInput: Story = {
  args: {
    label: 'Password',
    id: 'super-input-password',
    type: 'password',
  },
}

export const EmailInput: Story = {
  args: {
    label: 'Email',
    id: 'super-input-email',
    type: 'email',
  },
}

export const SearchInput: Story = {
  args: {
    id: 'super-input-search',
    type: 'text',
    onResetClick: () => {},
    disabled: true,
  },
}

export const InputWithError: Story = {
  args: {
    id: 'super-input-error',
    type: 'text',
    error: 'Error',
  },
}
export const InputDisable: Story = {
  args: {
    id: 'super-input-error',
    type: 'text',
    disabled: true,
  },
}
