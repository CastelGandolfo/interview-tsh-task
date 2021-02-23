import axios from 'axios'
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from '../constants/productConstants'

export const listProducts = (text, promo, active) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST })

    const params = {
      ...(text !== '' && { search: text }),
      ...(promo && { promo }),
      ...(active && { active }),
      page: 1,
      limit: 8,
    }

    const {
      data: { items, meta },
    } = await axios.get(`https://join-tsh-api-staging.herokuapp.com/products`, {
      params,
    })

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
