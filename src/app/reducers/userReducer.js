import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  LOGOUT,
} from '../constants/userConstants'

export const userReducer = (
  state = {
    loggedUser: {
      username: 'Przemek',
      avatar:
        'https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819_1280.png',
    },
    loading: false,
  },
  action
) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return { ...state, loading: true, loggedUser: action.payload }
    case USER_LOGIN_FAIL:
      return {
        ...state,
        loggedUser: null,
        loading: false,
        error: action.payload,
      }
    case LOGOUT:
      return {
        ...state,
        loggedUser: null,
        loading: false,
      }
    default:
      return state
  }
}
