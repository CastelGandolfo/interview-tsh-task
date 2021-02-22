import {
  UPDATE_SEARCH_TEXT,
  CHANGE_PROMO_CHECKBOX,
  CHANGE_ACTIVE_CHECKBOX,
  RESIZE_WINDOW,
} from '../constants/searchConstants'

export const searchParametersReducer = (
  state = { text: '', promo: false, active: false, size: 'desktop' },
  action
) => {
  switch (action.type) {
    case UPDATE_SEARCH_TEXT:
      return { ...state, text: action.payload }
    case CHANGE_PROMO_CHECKBOX:
      return { ...state, promo: !state.promo }
    case CHANGE_ACTIVE_CHECKBOX:
      return { ...state, active: !state.active }

    default:
      return state
  }
}
