import s from './pagination.module.scss'

type Props = {
  totalItems: number
  itemsPerPage: number
  currentPage: number
  handlePageChange: (page: number) => void
}

export const Pagination = ({ totalItems, itemsPerPage, currentPage, handlePageChange }: Props) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  let pages = []
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i)
    }
  } else {
    for (let i = 1; i <= currentPage; i++) {
      pages.push(i)
    }
    if (currentPage > 3 && currentPage < totalPages - 3) {
      pages = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages]
    } else if (currentPage <= 3) {
      pages = [1, 2, 3, 4, 5, '...', totalPages]
    } else {
      pages = [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages]
    }
  }
  return (
    <div>
      <button
        disabled={currentPage === 1}
        className={s.navigationButton}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        {'<'}
      </button>
      {pages.map(page =>
        typeof page === 'string' ? (
          <span className={s.ellipsis}>{page}</span>
        ) : (
          typeof page === 'number' && (
            <button
              key={page}
              className={
                page === currentPage
                  ? `${s.paginationButton} ${s.activePageButton}`
                  : s.paginationButton
              }
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          )
        )
      )}
      <button
        disabled={currentPage === totalPages}
        className={s.navigationButton}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        {'>'}
      </button>
    </div>
  )
}
