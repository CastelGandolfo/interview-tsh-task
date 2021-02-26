import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Login } from '../app/login/Login'
import { Products } from '../app/products/Products'

import { AppRoute } from './AppRoute.enum'

export const AppRoutes = () => {
  return (
    <Switch>
      <Route path={AppRoute.login} component={Login} />
      <Route path={AppRoute.home} component={Products} />
    </Switch>
  )
}
