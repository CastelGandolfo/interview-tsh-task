import React from 'react'

import { AppRoutes } from '../routing/AppRoutes'
import Header from './header/Header'

export const App = () => {
  return (
    <>
      <Header />
      <AppRoutes />
    </>
  )
}
