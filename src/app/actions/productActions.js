import axios from 'axios'
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  SHOW_PRODUCT_DETAILS,
  CLOSE_PRODUCT_DETAILS,
} from '../constants/productConstants'

export const listProducts = (text, promo, active, page, size) => async (
  dispatch
) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST })

    const productsPerPage = size === 'desktop' ? 8 : 4

    const params = {
      ...(text !== '' && { search: text }),
      ...(promo && { promo }),
      ...(active && { active }),
      ...(page && { page }),
      limit: productsPerPage,
    }

    const {
      data: {
        items,
        meta: { totalPages },
      },
    } = await axios.get(`https://join-tsh-api-staging.herokuapp.com/products`, {
      params,
    })

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: { items, totalPages },
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const showProductDetails = (product) => {
  return { type: SHOW_PRODUCT_DETAILS, payload: product }
}

export const closeProductDetails = () => {
  return { type: CLOSE_PRODUCT_DETAILS }
}
