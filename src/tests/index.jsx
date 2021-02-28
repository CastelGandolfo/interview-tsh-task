// see https://testing-library.com/docs/react-testing-library/setup#custom-render
import React from 'react'
import { MemoryRouter as Router } from 'react-router-dom'
import { render } from '@testing-library/react'

import { Provider } from 'react-redux'
import store from '../app/store'

const Wrapper = ({ children }) => {
  return (
    <Provider store={store}>
      <Router>{children}</Router>
    </Provider>
  )
}

function customRender(ui, options) {
  return render(ui, { wrapper: options?.wrapper ?? Wrapper, ...options })
}

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
