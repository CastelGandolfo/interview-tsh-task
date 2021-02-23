import React from 'react'
import { Pagination } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { changeProductsPage } from '../../actions/searchActions'
import {
  PaginateContainer,
  PaginateList,
  SinglePage,
  DisabledLink,
  ActivePage,
} from './Paginate.module.css'
import ReactPaginate from 'react-paginate'

const Paginate = () => {
  const dispatch = useDispatch()

  const pageChangeValue = (e) => {
    dispatch(changeProductsPage(e.selected + 1))
  }

  const productList = useSelector((state) => state.productList)
  const { loading, pages } = productList
  const searchParameters = useSelector((state) => state.searchParameters)
  const { page } = searchParameters

  if (loading) {
    return null
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
          forcePage={page - 1}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pages}
          marginPagesDisplayed={3}
          pageRangeDisplayed={2}
          containerClassName={'pagination'}
          // subContainerClassName={SinglePage}
          onPageChange={(e) => pageChangeValue(e)}
          activeClassName={ActivePage}
        />

        <Link to='#' className={page === pages ? DisabledLink : undefined}>
          Last
        </Link>
      </div>
    </>
  )
}

export default Paginate
