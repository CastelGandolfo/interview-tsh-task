import React from 'react'
import { Pagination } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import { PaginateContainer } from './Paginate.module.css'

const Paginate = ({ pages = 20, page = 1, keyword = '' }) => {
  return (
    pages > 1 && (
      <Pagination className={PaginateContainer}>
        {/* generate first three items */}
        <Pagination.First>First</Pagination.First>
        <Pagination.Item active>1</Pagination.Item>
        <Pagination.Item>2</Pagination.Item>
        <Pagination.Item>3</Pagination.Item>
        <Pagination.Ellipsis />
        {/* {[...Array(pages).keys()].map((x) => (
          <LinkContainer
            key={x + 1}
            to={keyword ? `/search/${keyword}/page/${x + 1}` : `/page/${x + 1}`}
          >
            <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
          </LinkContainer>
        ))} */}
        {/* generate last three items */}
        <Pagination.Item>8</Pagination.Item>
        <Pagination.Item>9</Pagination.Item>
        <Pagination.Item>10</Pagination.Item>

        <Pagination.Last>Last</Pagination.Last>
      </Pagination>
    )
  )
}

export default Paginate
