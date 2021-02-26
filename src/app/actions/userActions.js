import {
  // USER_LOGIN_SUCCESS,
  // USER_LOGIN_FAIL,
  LOGOUT,
} from '../constants/userConstants'

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  })
}
