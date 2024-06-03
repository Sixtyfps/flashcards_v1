import {
  Table,
  TableBody,
  TableDataCell,
  TableHeadCell,
  TableHeader,
  TableRow,
} from '@/components/ui/tables/tables'
import { Button } from '@/components/ui/button'
import { PlayCircleIcons } from '@/images/icons/Table/PlayCircleIcons'
import { EditIcons } from '@/images/icons/Table/EditIcons'
import { DeleteIcons } from '@/images/icons/Table/DeleteIcons'

type ItemsProps = {
  id: number
  name: string
  counterCard: number
  updated: string
  by: string
}

type Props = {
  items: ItemsProps[]
}
export const TableForStorybook = ({ items }: Props) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeadCell>Name</TableHeadCell>
          <TableHeadCell>Card</TableHeadCell>
          <TableHeadCell>Last Updated</TableHeadCell>
          <TableHeadCell>Created By</TableHeadCell>
          <TableHeadCell></TableHeadCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map(items => {
          return (
            <TableRow key={items.id}>
              <TableDataCell>{items.name}</TableDataCell>
              <TableDataCell>{items.counterCard}</TableDataCell>
              <TableDataCell>{items.updated}</TableDataCell>
              <TableDataCell>{items.by}</TableDataCell>
              <TableDataCell>
                <Button variant={'icon'}>
                  <PlayCircleIcons />
                  <EditIcons />
                  <DeleteIcons />
                </Button>
              </TableDataCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
