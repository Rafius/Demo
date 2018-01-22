import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import container from '../containers/container'
import store from './store'
import Header from '../components/commons/header'

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={container} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
)

export default Root
