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
        children: 'Add New Card',
        disabled: false,
    },
}

export const Secondary: Story = {
    args: {
        Icon: testImg,
        variant: 'secondary',
        children: 'Secondary Button',
        disabled: false,
    },
}

export const FullWidth: Story = {
    args: {
        variant: 'primary',
        children: 'Full Width Primary Button',
        disabled: false,
        fullWidth: true,
    },
}