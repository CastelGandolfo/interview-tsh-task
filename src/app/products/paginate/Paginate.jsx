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
        <Link className={page === 1 && DisabledLink}>First</Link>
        {/* <Link>1</Link>
        <Link>2</Link>
        <Link>3</Link>
        <div>...</div>
        <Link>5</Link>
        <Link>6</Link>
        <Link>7</Link> */}
        <ReactPaginate
          pageClassName={PaginateList}
          previousLabel={''}
          nextLabel={''}
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

        <Link className={page === pages && DisabledLink}>Last</Link>
      </div>
    </>
  )
}

export default Paginate
