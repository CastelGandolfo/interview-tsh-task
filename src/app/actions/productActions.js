import axios from 'axios'
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from '../constants/productConstants'

export const listProducts = (text, promo, active, page) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST })

    const params = {
      ...(text !== '' && { search: text }),
      ...(promo && { promo }),
      ...(active && { active }),
      ...(page && { page }),
      limit: 8,
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
      type: PRODUCT_LIST_REQUEST,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
