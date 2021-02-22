import React from 'react'
import store from '../app/store'

import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

export const AppProviders = ({ children }) => (
  <Provider store={store}>
    <Router>{children}</Router>
  </Provider>
)
