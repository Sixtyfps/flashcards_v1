import { useState } from 'react'
import { Pagination } from '@/components/ui/pagination/pagination'

type Props = {
  totalItems: number
  itemsPerPage: number
}

export const PaginationForStorybook = ({ totalItems, itemsPerPage }: Props) => {
  const [currentPage, setCurrentPage] = useState(1)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }
  return (
    <Pagination
      totalItems={totalItems}
      itemsPerPage={itemsPerPage}
      currentPage={currentPage}
      handlePageChange={handlePageChange}
    />
  )
}
