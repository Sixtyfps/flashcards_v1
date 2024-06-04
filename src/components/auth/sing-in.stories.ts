import type { Meta, StoryObj } from '@storybook/react'

import { SubmitHandler } from 'react-hook-form'

import { FormType, SignIn } from './sing-in'

const meta = {
  component: SignIn,
  tags: ['autodocs'],
  title: 'Auth/LoginForm',
} satisfies Meta<typeof SignIn>

export default meta
type Story = StoryObj<typeof meta>
const handleSignIn: SubmitHandler<FormType> = data => {
  console.log('Form Data:', data)
}

export const Primary: Story = {
  args: {
    onSubmit: handleSignIn,
  },
}
