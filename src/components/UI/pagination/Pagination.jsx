import React from 'react'
import { usePagination } from '../../../hooks/usePagination'
import classNames from 'clsx'
import classes from './Pagination.module.css'

const Pagination = ({ totalPages, page, changePage }) => {
    const pagesArray = usePagination(totalPages)

    // const rootClasses = [classes.page]
    // if (page === p) {
    //     rootClasses.push(classes.pageCurrent)
    // }
    // className={page === p ? 'page pageCurrent' : 'page'}

    return (
        <div className={classes.wrapper}>
            {pagesArray.map((p) => (
                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={classNames(classes.page, page === p && classes.pageCurrent)}
                >
                    {p}
                </span>
            ))}
        </div>
    )
}

export default Pagination
