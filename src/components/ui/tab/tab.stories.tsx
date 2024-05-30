import type { Meta, StoryObj } from '@storybook/react'

import { Tab } from './tab'

const meta = {
  component: Tab,
  tags: ['autodocs'],
  title: 'Components/Tab',
} satisfies Meta<typeof Tab>

export default meta
type Story = StoryObj<typeof meta>

export const BaseTab: Story = {
  args: {
    isDark: false,
  },
}
