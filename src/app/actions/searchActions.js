import {
  UPDATE_SEARCH_TEXT,
  CHANGE_PROMO_CHECKBOX,
  CHANGE_ACTIVE_CHECKBOX,
  CHANGE_PRODUCTS_PAGE,
  RESIZE_WINDOW,
} from '../constants/searchConstants'

export const changeSearchText = (text) => {
  return {
    type: UPDATE_SEARCH_TEXT,
    payload: text,
  }
}

export const changePromoCheckbox = () => {
  return {
    type: CHANGE_PROMO_CHECKBOX,
  }
}

export const changeActiveCheckbox = () => {
  return {
    type: CHANGE_ACTIVE_CHECKBOX,
  }
}

export const changeProductsPage = (number) => {
  return {
    type: CHANGE_PRODUCTS_PAGE,
    payload: number,
  }
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
