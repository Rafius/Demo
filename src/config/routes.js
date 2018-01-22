import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import container from '../containers/container';
import store from './store';

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
          {/* <Header/> */}
          <Switch>
            <Route exact path="/" component={container}/>
          </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
