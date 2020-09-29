import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './Home'
import Login from './Login'
import Register from './Register'
import CompanyStockInfo from './CompanyStockInfo'
import Markets from './Markets'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/stocks/:id" component={CompanyStockInfo} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/markets" component={Markets} />
  </Switch>
)

export default Routes
