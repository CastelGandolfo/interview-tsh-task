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

export const changeScreenWidth = (screenWidth) => (dispatch, getState) => {
  const {
    searchParameters: { size },
  } = getState()

  if (screenWidth < 576 && size === 'desktop') {
    dispatch({
      type: RESIZE_WINDOW,
      payload: 'mobile',
    })
  } else if (screenWidth > 575 && size === 'mobile') {
    dispatch({
      type: RESIZE_WINDOW,
      payload: 'desktop',
    })
  }
}
