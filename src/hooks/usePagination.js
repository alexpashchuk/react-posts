import { useMemo } from 'react'

export const usePagination = (totalPages) => {
    const result = useMemo(() => {
        const arr = []
        for (let i = 0; i < totalPages; i++) {
            arr.push(i + 1)
        }
        return arr
    }, [totalPages])

    return result
}

//
// Теперь меню пагинации будет перерисовано только тогда, когда изменится количество страниц. В Pagination.jsx
// (App.js) требуется следующее:
//
//     const pagesArray = usePagination(totalPages)
