import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import './css/index.scss'
import Routes from './config/routes'

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  )
}

render(Routes)

if (module.hot) {
  module.hot.accept('./config/Routes', () => {
    render(Routes)
  })
}

if (process.env.NODE_ENV === 'production') {
  // eslint-disable-next-line global-require
  require('offline-plugin/runtime').install()
}
