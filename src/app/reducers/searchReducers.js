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
      return { ...state, text: action.payload, page: 1 }
    case CHANGE_PROMO_CHECKBOX:
      return { ...state, promo: !state.promo, page: 1 }
    case CHANGE_ACTIVE_CHECKBOX:
      return { ...state, active: !state.active, page: 1 }
    case CHANGE_PRODUCTS_PAGE:
      return { ...state, page: action.payload }
    case RESIZE_WINDOW:
      return { ...state, size: action.payload, page: 1 }

    default:
      return state
  }
}
