import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { productListReducer } from './reducers/productReducers'
import { searchParametersReducer } from './reducers/searchReducers'

const reducer = combineReducers({
  productList: productListReducer,
  searchParameters: searchParametersReducer,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
