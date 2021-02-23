import React from 'react'
import { Pagination } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import {
  PaginateContainer,
  PaginateList,
  SinglePage,
  DisabledLink,
} from './Paginate.module.css'
import ReactPaginate from 'react-paginate'

const Paginate = ({ pages = 20, page = 1, keyword = '' }) => {
  const pageChangeValue = (e) => {
    console.log(e.selected + 1)
  }
  return (
    <>
      <div className={PaginateContainer}>
        <Link to='#' className={page === 1 ? DisabledLink : undefined}>
          First
        </Link>
        <ReactPaginate
          pageClassName={PaginateList}
          previousLabel={''}
          nextLabel={''}
          forcePage={page}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={20}
          marginPagesDisplayed={3}
          pageRangeDisplayed={2}
          containerClassName={'pagination'}
          // subContainerClassName={SinglePage}
          onPageChange={(e) => pageChangeValue(e)}
          activeClassName={'active'}
        />

        <Link to='#' className={page === pages ? DisabledLink : undefined}>
          Last
        </Link>
      </div>
    </>
  )
}

export default Paginate
