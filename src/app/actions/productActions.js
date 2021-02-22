import axios from 'axios'
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from '../constants/productConstants'

export const listProducts = (text, promo, active) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST })

    const {
      data: { items, meta },
    } = await axios.get(
      `https://join-tsh-api-staging.herokuapp.com/products?search=${text}&limit=8&page=1&promo=${promo}&active=${active}`
    )

    console.log(items)

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: items,
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
