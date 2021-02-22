import {
  UPDATE_SEARCH_TEXT,
  CHANGE_PROMO_CHECKBOX,
  CHANGE_ACTIVE_CHECKBOX,
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
