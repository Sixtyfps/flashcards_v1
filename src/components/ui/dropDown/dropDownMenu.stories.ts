import type { Meta, StoryObj } from '@storybook/react'

import { DropDownMenu } from './dropDownMenu'

const meta = {
  component: DropDownMenu,
  tags: ['autodocs'],
  title: 'Components/DropDown',
} satisfies Meta<typeof DropDownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const WorkMenuWithoutImages: Story = {
  args: {
    email: 'sadasdasd@gmail.com',
    username: 'Artsiom',
  },
}

export const WorkMenuWithImages: Story = {
  args: {
    email: 'sadasdasd@gmail.com',
    username: 'Artsiom',
    image:
      'https://img.freepik.com/free-photo/cute-ai-generated-cartoon-bunny_23-2150288872.jpg?t=st=1717059140~exp=1717062740~hmac=ded8e9886d1e2ce436357fca0c4af8864b985d5a72da7ddf7e30524e709bd6c9&w=740',
  },
}

export const MiniMenu: Story = {
  args: {
    miniMenu: 'd',
  },
}
