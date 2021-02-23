import {
  UPDATE_SEARCH_TEXT,
  CHANGE_PROMO_CHECKBOX,
  CHANGE_ACTIVE_CHECKBOX,
  CHANGE_PRODUCTS_PAGE,
  RESIZE_WINDOW,
} from '../constants/searchConstants'

export const changeSearchText = (text) => (dispatch) => {
  dispatch({
    type: UPDATE_SEARCH_TEXT,
    payload: text,
  })
}

export const changePromoCheckbox = () => (dispatch) => {
  dispatch({
    type: CHANGE_PROMO_CHECKBOX,
  })
}

export const changeActiveCheckbox = () => (dispatch) => {
  dispatch({
    type: CHANGE_ACTIVE_CHECKBOX,
  })
}

export const changeProductsPage = (number) => (dispatch) => {
  dispatch({
    type: CHANGE_PRODUCTS_PAGE,
    payload: number,
  })
}
