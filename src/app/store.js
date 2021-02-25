import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
  productListReducer,
  productDetailsReducer,
} from './reducers/productReducers'
import { searchParametersReducer } from './reducers/searchReducers'
import { userReducer } from './reducers/userReducer'

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  searchParameters: searchParametersReducer,
  user: userReducer,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
