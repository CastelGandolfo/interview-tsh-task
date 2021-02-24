import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  SHOW_PRODUCT_DETAILS,
  CLOSE_PRODUCT_DETAILS,
} from '../constants/productConstants'

export const productListReducer = (
  state = { products: [], loading: false, pages: null },
  action
) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { ...state, loading: true, products: [] }
    case PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload.items,
        pages: action.payload.totalPages,
      }
    case PRODUCT_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        pages: null,
      }
    default:
      return state
  }
}

export const productDetailsReducer = (
  state = { product: null, showDetails: false },
  action
) => {
  switch (action.type) {
    case SHOW_PRODUCT_DETAILS:
      return {
        ...state,
        product: action.payload,
        showDetails: true,
      }
    case CLOSE_PRODUCT_DETAILS:
      return {
        ...state,
        product: null,
        showDetails: false,
      }
    default:
      return state
  }
}
