import {
  UPDATE_SEARCH_TEXT,
  CHANGE_PROMO_CHECKBOX,
  CHANGE_ACTIVE_CHECKBOX,
  CHANGE_PRODUCTS_PAGE,
  RESIZE_WINDOW,
} from '../constants/searchConstants'

export const searchParametersReducer = (
  state = { text: '', promo: false, active: false, page: 1, size: 'desktop' },
  action
) => {
  switch (action.type) {
    case UPDATE_SEARCH_TEXT:
      return { ...state, text: action.payload }
    case CHANGE_PROMO_CHECKBOX:
      return { ...state, promo: !state.promo }
    case CHANGE_ACTIVE_CHECKBOX:
      return { ...state, active: !state.active }
    case CHANGE_PRODUCTS_PAGE:
      return { ...state, page: action.payload }

    default:
      return state
  }
}
