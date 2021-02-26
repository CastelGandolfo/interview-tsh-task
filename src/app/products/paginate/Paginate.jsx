import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { changeProductsPage } from '../../actions/searchActions'
import {
  PaginateContainer,
  PaginateList,
  DisabledLink,
  ActivePage,
} from './Paginate.module.css'
import ReactPaginate from 'react-paginate'

const Paginate = () => {
  const dispatch = useDispatch()

  const pageChangeValue = (number) => {
    dispatch(changeProductsPage(number + 1))
  }

  const productList = useSelector((state) => state.productList)
  const { loading, pages, products } = productList
  const searchParameters = useSelector((state) => state.searchParameters)
  const { page } = searchParameters

  if (loading || products.length === 0) {
    return null
  }

  return (
    <>
      <div className={PaginateContainer}>
        <Link
          to='#'
          className={page === 1 ? DisabledLink : undefined}
          onClick={() => pageChangeValue(0)}
        >
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
          onPageChange={(e) => pageChangeValue(e.selected)}
          activeClassName={ActivePage}
        />

        <Link
          to='#'
          className={page === pages ? DisabledLink : undefined}
          onClick={() => pageChangeValue(pages - 1)}
        >
          Last
        </Link>
      </div>
    </>
  )
}

export default Paginate
