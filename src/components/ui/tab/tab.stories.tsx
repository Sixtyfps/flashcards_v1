import type { Meta, StoryObj } from '@storybook/react'

import { Tab } from './tab'

const meta = {
  argTypes: {
    variant: {
      options: ['BaseTab'],
    },
  },
  component: Tab,
  tags: ['autodocs'],
  title: 'Components/Tab',
} satisfies Meta<typeof Tab>

export default meta
type Story = StoryObj<typeof meta>

export const BaseTab: Story = {}
//
// export const Dark: Story = {
//   args: {
//     children: (
//       <p>
//         <div>Dark</div>
//       </p>
//     ),
//     isDark: true,
//     maxWidth: '300px',
//     variant: 'primary',
//   },
// }
//
// export const CardAsDiv: Story = {
//   args: {
//     as: 'div',
//     children: 'div',
//     variant: 'primary',
//   },
// }
//
// export const CardAsSection: Story = {
//   args: {
//     as: 'section',
//     children: 'section',
//     variant: 'primary',
//   },
// }
