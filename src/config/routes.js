import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import container from '../containers/container'
import store from './store'

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={container} />
      </Switch>
    </BrowserRouter>
  </Provider>
)

export default Root
